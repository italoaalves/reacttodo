import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: 'whitesmoke',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}></input>
        <p>{title}</p>
        <button onClick={this.props.delTodo.bind(this, id)}>X</button>
      </div>
    );
  }
}

// Proptypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}