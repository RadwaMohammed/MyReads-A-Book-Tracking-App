import React from 'react'
import BookShelfChanger from './BookShelfChanger'

function Book (props) {
	const { book, bookShelf, moveBook } = props

	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						/* Fix problem - some of books don't have thumbnail */
						backgroundImage:`url(${ book.imageLinks
							? book.imageLinks.thumbnail
							: ''
						})`
					}}
				>
			</div>
			<div className="book-shelf-changer">
				<BookShelfChanger
					book={book}
					bookShelf={bookShelf}
					moveBook={moveBook}
				/>
			</div>
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">
				{
					/* Fix problem - some of books don't have authors */
					book.authors ? book.authors.join(', ') : 'Author is unknown'
				}
			</div>
		</div>
	)
}

export default Book