import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Players } from '../api/players.js';
 
// Player component - represents a single todo item
export default class Player extends Component {
  draft() {
    Meteor.call('players.draft', this.props.player._id);
  }
 
  render() {
    return (
      <li className="player">
        <button className="delete" onClick={this.draft.bind(this)}>
          Drafted
        </button>

        <span className="name">{this.props.player.name}</span>
        <span className="team">{this.props.player.team}</span>
        <span className="position">{this.props.player.position}</span>
        <span className="value">{this.props.player.value}</span>
      </li>
    );
  }
}
 
Player.propTypes = {
  // This component gets the player to display through a React prop.
  // We can use propTypes to indicate it is required
  player: PropTypes.object.isRequired,
};