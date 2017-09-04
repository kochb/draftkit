import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Players } from '../api/players.js';
import Player from './Player.jsx';

const limits = {
  'QB': 1,
  'RB': 2,
  'WR': 2,
  'TE': 1,
  'K': 1,
  'DST': 1,
  'FLEX': 1,
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
    filteredPlayers = filteredPlayers.filter(player => player.name.toLowerCase().includes(this.state.search));
    if (this.state.hideUnavailable) {
      filteredPlayers = filteredPlayers.filter(player => (player.available == null || player.available));
    }
    filteredPlayers = filteredPlayers.sort((a, b) => this.playerIncrementalValue(b) - this.playerIncrementalValue(a));
    return filteredPlayers.map((player) => (
      <Player key={player._id} player={player} incremental_value={this.playerIncrementalValue(player)} />
    ));
  }

  getTeam() {
    let filteredPlayers = this.props.players;
    filteredPlayers = filteredPlayers.filter(player => player.drafted);
    return filteredPlayers;
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
    let counts = {'QB':0,'RB':0,'WR':0,'TE':0,'FLEX':0,'DST':0,'K':0};
    let filteredPlayers = this.getTeam();
    filteredPlayers.push(player);
    filteredPlayers = filteredPlayers.sort((a, b) => this.playerValue(b) - this.playerValue(a));
    new_value = filteredPlayers.reduce(function (result, player) {
      counts[player.position] += 1;
      if (counts[player.position] <= limits[player.position]) {
        return result + player.value;
      } else {
        return result;
      }
    }, 0);
    return new_value - this.teamValue();
  }

  teamValue() {
    let filteredPlayers = this.getTeam();
    let counts = {'QB':0,'RB':0,'WR':0,'TE':0,'FLEX':0,'DST':0,'K':0};
    filteredPlayers = filteredPlayers.sort((a, b) => this.playerValue(b) - this.playerValue(a));
    return filteredPlayers.reduce(function (result, player) {
      counts[player.position] += 1;
      if (counts[player.position] <= limits[player.position]) {
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
