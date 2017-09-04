import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Players } from '../api/players.js';
import Player from './Player.jsx';
 
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      search: '',
      hideDrafted: true,
    };
  }

  reset(event) {
    Meteor.call('players.reset');
  }
 
  search(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    this.setState({
      hideDrafted: this.state.hideDrafted,
      search: text,
    });
  }
 
  toggleHideDrafted() {
    this.setState({
      hideDrafted: !this.state.hideDrafted,
    });
  }
 
  renderPlayers() {
    let filteredPlayers = this.props.players;
    filteredPlayers = filteredPlayers.filter(player => player.name.toLowerCase().includes(this.state.search));
    if (this.state.hideDrafted) {
      filteredPlayers = filteredPlayers.filter(player => (player.available == null || player.available));
    }
    filteredPlayers = filteredPlayers.sort((a, b) => b.value - a.value)
    console.log(filteredPlayers);
    return filteredPlayers.map((player) => (
      <Player key={player._id} player={player} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
	  <h1>Draft Kit</h1>

	  <button onClick={this.reset.bind(this)}>Reset</button>

          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideDrafted}
              onClick={this.toggleHideDrafted.bind(this)}
            />
            Hide Drafted
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
