import React from 'react'
import Todos from './components/Todos'

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

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} toggleItemStatus={this.toggleItemStatus} deleteTodoItem={this.deleteTodoItem} />
      </div>
    )
  }
}

export default App
