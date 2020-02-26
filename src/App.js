import React, { Component } from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Make this app work, and test it to asure',
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

  addTodo = (title) => {
    const todosList = this.state.todos
    const newTodo = {
      id: todosList[0] ? todosList[todosList.length-1].id + 1: 1,
      title: title,
      completed: false
    }
    this.setState({todos: [...todosList, newTodo]});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <div className="todos">
          <Todos  todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}
