import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function ListBooks (props) {
	const { books, moveBook } = props
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>
					<BookShelf
						shelfName="Currently Reading"
						books={ books.filter(book => book.shelf === "currentlyReading") }
						moveBook={moveBook}
					/>
					<BookShelf
						shelfName="Want to Read"
						books={ books.filter(book => book.shelf === "wantToRead") }
						moveBook={moveBook}
					/>
					<BookShelf
						shelfName="Read"
						books={ books.filter(book => book.shelf === "read") }
						moveBook={moveBook}
					/>
				</div>
			</div>
			<div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
	    </div>
	)
}


export default ListBooks