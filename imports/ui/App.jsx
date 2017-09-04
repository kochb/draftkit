import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
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
    return filteredPlayers.map((player) => (
      <Player key={player._id} player={player} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
	  <h1>Draft Kit</h1>

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
  incompleteCount: PropTypes.number.isRequired,
};
 
export default createContainer(() => {
  return {
    players: Players.find({}, { sort: { value: -1 } }).fetch(),
    incompleteCount: Players.find({ checked: { $ne: true } }).count(),
  };
}, App);
