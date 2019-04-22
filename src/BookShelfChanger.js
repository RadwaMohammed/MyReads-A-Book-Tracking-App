import React, { Component } from 'react'

class BookShelfChanger extends Component {
	state={
		shelf: this.props.bookShelf
	}

	/* change the book's shelf to the target shelf*/
	handleChange=(event)=>{
		this.props.moveBook( this.props.book, event.target.value);
		this.setState({ shelf: event.target.value });
	}

	render() {
		const { shelf } = this.state
		return (
			<select onChange={ this.handleChange } value={ shelf }>
				<option value="move" disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		)
	}
}
export default BookShelfChanger