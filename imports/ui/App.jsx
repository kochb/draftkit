import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Players } from '../api/players.js';
import Player from './Player.jsx';

const is_flex = function (position) { return position == 'WR' || position == 'RB' || position == 'TE'; };
const roster_limit = 15;
const limits = {
  'QB': 1,
  'RB': 2,
  'WR': 2,
  'TE': 1,
  'K': 1,
  'DST': 1,
  'FLEX': 1,
  'BENCH': 6,
};
const team_limits = {
  'QB': 4,
  'RB': 8,
  'WR': 8,
  'TE': 4,
  'K': 3,
  'DST': 3,
};
const bench_limits = {
  'QB': 1,
  'RB': 6,
  'WR': 6,
  'TE': 3,
  'K': 0,
  'DST': 0,
};
 
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      search: '',
      hideUnavailable: true,
    };
  }

  reset(event) {
    Meteor.call('players.reset');
  }
 
  search(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    this.setState({
      hideUnavailable: this.state.hideUnavailable,
      search: text,
    });
  }
 
  toggleHideUnavailable() {
    this.setState({
      hideUnavailable: !this.state.hideUnavailable,
    });
  }
 
  renderPlayers() {
    let filteredPlayers = this.props.players;
    if (this.state.hideUnavailable) {
      filteredPlayers = this.getAvailablePlayers();
    }
    filteredPlayers = filteredPlayers.filter(player => player.name.toLowerCase().includes(this.state.search));
    filteredPlayers = filteredPlayers.sort((a, b) => this.playerIncrementalValue(b) - this.playerIncrementalValue(a));
    return filteredPlayers.map((player) => (
      <Player key={player._id} player={player} incremental_value={this.playerIncrementalValue(player)} value_above_replacement={this.playerValueAboveReplacement(player)} />
    ));
  }

  getTeam() {
    let filteredPlayers = this.props.players;
    filteredPlayers = filteredPlayers.filter(player => player.drafted);
    return filteredPlayers;
  }

  getAvailablePlayers() {
    let filteredPlayers = this.props.players;
    filteredPlayers = filteredPlayers.filter(player => (player.available == null || player.available));
    return filteredPlayers
  }
 
  renderTeam() {
    let filteredPlayers = this.getTeam();
    filteredPlayers = filteredPlayers.sort((a, b) => this.playerValue(b) - this.playerValue(a));
    return filteredPlayers.map((player) => (
      <Player key={player._id} player={player} incremental_value={this.playerIncrementalValue(player)} />
    ));
  }

  playerValue(player) {
    return player.value;
  }

  playerIncrementalValue(player) {
    let counts = {'QB':0,'RB':0,'WR':0,'TE':0,'FLEX':0,'DST':0,'K':0,'BENCH':0};
    let bench_counts = {'QB':0,'RB':0,'WR':0,'TE':0,'DST':0,'K':0};
    let filteredPlayers = this.getTeam();
    filteredPlayers.push(player);
    filteredPlayers = filteredPlayers.sort((a, b) => this.playerValue(b) - this.playerValue(a));
    new_value = filteredPlayers.reduce(function (result, player) {
      counts[player.position] += 1;
      if (counts[player.position] <= limits[player.position]) {
        return result + player.value;
      } else if (is_flex(player.position) && counts['FLEX'] < limits['FLEX']) {
        counts['FLEX'] += 1;
        return result + player.value;
      } else if (bench_counts[player.position] < bench_limits[player.position]) {
        counts['BENCH'] += 1;
	bench_counts[player.position] += 1;
        return result + player.value;
      } else {
        return result;
      }
    }, 0);
    return new_value - this.teamValue();
  }

  playerValueAboveReplacement(player) {
    let filteredPlayers = this.getAvailablePlayers();
    filteredPlayers = filteredPlayers.filter(replacement => (player.position == replacement.position && player._id != replacement._id));
    filteredPlayers = filteredPlayers.sort((a, b) => this.playerValue(b) - this.playerValue(a));
    replacement = filteredPlayers[0];
    console.log(player, replacement);
    if (replacement) {
      return player.value - replacement.value;
    } else {
      return 0;
    }
  }

  teamValue() {
    let filteredPlayers = this.getTeam();
    let counts = {'QB':0,'RB':0,'WR':0,'TE':0,'FLEX':0,'DST':0,'K':0};
    let bench_counts = {'QB':0,'RB':0,'WR':0,'TE':0,'DST':0,'K':0};
    filteredPlayers = filteredPlayers.sort((a, b) => this.playerValue(b) - this.playerValue(a));
    return filteredPlayers.reduce(function (result, player) {
      counts[player.position] += 1;
      if (counts[player.position] <= limits[player.position]) {
        return result + player.value;
      } else if (is_flex(player.position) && counts['FLEX'] < limits['FLEX']) {
        counts['FLEX'] += 1;
        return result + player.value;
      } else if (bench_counts[player.position] < bench_limits[player.position]) {
        counts['BENCH'] += 1;
        bench_counts[player.position] += 1;
        return result + player.value;
      } else {
        return result;
      }
    }, 0);
  }
 
  render() {
    return (
      <div className="container">
        <header>
	  <h1>Draft Kit</h1>
	  <p>Team Value {this.teamValue()}</p>

	  <button onClick={this.reset.bind(this)}>Reset</button>

          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideUnavailable}
              onClick={this.toggleHideUnavailable.bind(this)}
            />
            Hide Unavailable
          </label>
 
          <form className="search-player" onChange={this.search.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Search..."
            />
          </form>
        </header>
 
        <ul>
          {this.renderPlayers()}
        </ul>

        <ul className="drafted">
          {this.renderTeam()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  players: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    players: Players.find({}).fetch(),
    //players: Players.find({}, { sort: { value: -1 } }).fetch(),
  };
}, App);
