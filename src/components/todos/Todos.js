import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends React.Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem 
        key={todo.id} 
        data={todo} 
        toggleItemStatus={this.props.toggleItemStatus} 
        deleteTodoItem={this.props.deleteTodoItem}
      />
    ))
  }
}

// Prop Types
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleItemStatus: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired
}

export default Todos
