import React, { Component } from 'react';
import Todos from './components/Todos'

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Make this app work',
        completed: false
      }
    ]  
  }

  toggleComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) });
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !==id)]})
  }

  render() {
    return (
      <div className="App">
        <Todos  todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}
