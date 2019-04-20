import React from 'react'
import Book from './Book'

function BookShelf (props) {
	const { shelfName, books } = props

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelfName}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{
						books.map(book => (
							<li key={book.id}>
								<Book
									book={book}
									bookShelf={book.shelf}
								/>
							</li>
						))
					}

				</ol>
			</div>
		</div>
	)
}

export default BookShelf