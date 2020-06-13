import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from './components/pages/About'

import Header from './components/layout/Header'

import AddTodo from './components/todos/AddTodo'
import Todos from './components/todos/Todos'

import './App.css'

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Learn React - 1 Hour',
        is_done: false
      },
      {
        id: 2,
        title: 'June Leetcode Challange',
        is_done: false
      },
      {
        id: 3,
        title: 'Cloud Developer Nanodegree',
        is_done: false
      }
    ]
  }

  toggleItemStatus = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.is_done = !todo.is_done
        }
        return todo
      })
    })
  }

  deleteTodoItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)]
    })
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title: title,
      is_done: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]  
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
