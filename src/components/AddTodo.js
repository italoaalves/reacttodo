import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        title: ''
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value});
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Add Todo" 
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input 
                    type="submit"
                    value="Add"
                    className="btn"
                />
            </form>
        );
    }
}
