import React from 'react'
import BookShelfChanger from './BookShelfChanger'

function Book (props) {
		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{width: 128, height: 193, backgroundImage:''}}>
				</div>
				<div className="book-shelf-changer">
					<BookShelfChanger />
				</div>
				</div>
				<div className="book-title"></div>
				<div className="book-authors"></div>
			</div>
		)
	}

export default Book