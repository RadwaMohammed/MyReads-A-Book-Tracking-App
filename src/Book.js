import React from 'react'
import BookShelfChanger from './BookShelfChanger'

function Book (props) {
	const { book, bookShelf } = props

	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage:`url(${book.imageLinks.thumbnail})`
					}}
				>
			</div>
			<div className="book-shelf-changer">
				<BookShelfChanger
					bookShelf={bookShelf}
				/>
			</div>
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">{book.authors}</div>
		</div>
	)
}

export default Book