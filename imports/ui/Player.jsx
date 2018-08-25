import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Players } from '../api/players.js';
 
// Player component - represents a single todo item
export default class Player extends Component {
  draft() {
    Meteor.call('players.draft', this.props.player._id);
  }

  gone() {
    Meteor.call('players.gone', this.props.player._id);
  }
 
  render() {
    return (
      <tr className="player">
        <td>
          <button className="draft" onClick={this.draft.bind(this)}>
            +
          </button>
        </td>
        <td>
          <button className="gone" onClick={this.gone.bind(this)}>
            -
          </button>
        </td>

        <td>
          <span className="name">{this.props.player.name}</span>
        </td>
        <td>
          <span className="team">{this.props.player.team}</span>
        </td>
        <td>
          <span className="position">{this.props.player.position}</span>
        </td>
        <td>
          <span className="value">{this.props.player.value}</span>
        </td>
        <td>
          <span className="incremental_value">{this.props.incremental_value}</span>
        </td>
        <td>
          <span className="value_above_replacement">{this.props.value_above_replacement}</span>
        </td>
        <td>
          <span className="top_player top_player_2016">{this.props.top_player_2016 ? '★' : ''}</span>
        </td>
        <td>
          <span className="top_player top_player_2017">{this.props.top_player_2017 ? '★' : ''}</span>
        </td>
      </tr>
    );
  }
}
 
Player.propTypes = {
  // This component gets the player to display through a React prop.
  // We can use propTypes to indicate it is required
  player: PropTypes.object.isRequired,
};
