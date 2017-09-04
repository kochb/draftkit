import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tasks } from '../api/tasks.js';
 
// Task component - represents a single todo item
export default class Task extends Component {
  draft() {
    Meteor.call('players.draft', this.props.task._id);
  }
 
  render() {
    return (
      <li className="player">
        <button className="delete" onClick={this.draft.bind(this)}>
          Drafted
        </button>

        <span className="name">{this.props.task.name}</span>
        <span className="team">{this.props.task.team}</span>
        <span className="position">{this.props.task.position}</span>
        <span className="value">{this.props.task.value}</span>
      </li>
    );
  }
}
 
Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
