import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'


export default class Todos extends Component {
  render() {
    return this.props.todos.map(
      (todo) => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

// Proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}