import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Tasks } from '../api/tasks.js';
import Task from './Task.jsx';
 
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
 
  renderTasks() {
    let filteredTasks = this.props.tasks;
    filteredTasks = filteredTasks.filter(player => player.name.toLowerCase().includes(this.state.search));
    if (this.state.hideDrafted) {
      filteredTasks = filteredTasks.filter(player => (player.available == null || player.available));
    }
    return filteredTasks.map((task) => (
      <Task key={task._id} task={task} />
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
 
          <form className="new-task" onChange={this.search.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks"
            />
          </form>
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
};
 
export default createContainer(() => {
  return {
    tasks: Tasks.find({}, { sort: { value: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
  };
}, App);
