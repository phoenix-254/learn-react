import React from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends React.Component {
	state = {
		title: ''
	}

	onTitleChange = (e) => this.setState({ [e.target.name]: e.target.value })

	onSubmit = (e) => {
		e.preventDefault();

		if (this.state.title !== '') {
			this.props.addTodoItem(this.state.title)
			this.setState({ title: '' })
		}
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: 'flex', margin: '10px 0px' }}>
				<input
					type="text"
					name="title"
					style={{flex: '10', padding: '5px'}}
					placeholder="Add Todo..."
					value={this.state.title}
					onChange={this.onTitleChange}
				/>
				<input
					type="submit"
					value="Submit"
					className="btn"
					style={{flex: '1'}}
					onClick={this.props.onSubmitClick}
				/>
			</form>
		)
	}
}

// Prop Types
AddTodo.propTypes = {
	addTodoItem: PropTypes.func.isRequired
}

export default AddTodo