import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.data.completed ? 'line-through' : 'none'
    }
  }
  
  render() {
    const { id, title, completed } = this.props.data;

    return (
      <div style={this.getStyle()}>
        <p> 
          <input 
            style={{ margin: '5px' }} 
            type='checkbox' 
            checked={completed} 
            onChange={this.props.toggleItemStatus.bind(this, id)} 
          /> 
          
          {' '} 
          
          { title }
          
          <button 
            style={deleteButtonStyle} 
            onClick={this.props.deleteTodoItem.bind(this, id)}>
            X
          </button>
        </p>
      </div>
   )
  }
}

// Prop Types
TodoItem.propTypes = {
  data: PropTypes.object.isRequired,
  toggleItemStatus: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired
}

const deleteButtonStyle = {
  float: 'right',
  color: '#fff',
  backgroundColor: '#ff0000',
  border: 'none',
  borderRadius: '50%',
  padding: '5px 8.5px',
  cursor: 'pointer'
}

export default TodoItem
