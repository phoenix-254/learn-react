import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import axios from 'axios'

import About from './components/pages/About'

import Header from './components/layout/Header'

import AddTodo from './components/todos/AddTodo'
import Todos from './components/todos/Todos'

import './App.css'

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {
      this.setState({ todos: res.data })
    }) 
  }

  toggleItemStatus = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  deleteTodoItem = (id) => {
    axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)]
      })
    })
  }

  addTodoItem = (title) => {
    axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: title, 
      completed: false
    })
    .then(res => {
      this.setState({ todos: [...this.state.todos, res.data] })
    })
  }

  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <Header />
            
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodoItem={this.addTodoItem} />
                <Todos 
                  todos={this.state.todos} 
                  toggleItemStatus={this.toggleItemStatus} 
                  deleteTodoItem={this.deleteTodoItem}
                />
              </React.Fragment>
            )} />
            
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
