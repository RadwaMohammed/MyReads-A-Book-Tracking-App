import React from 'react'
import BookShelf from './BookShelf'

function ListBooks (props) {
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>
					<BookShelf
						shelfName="Currently Reading"
					/>
					<BookShelf
						shelfName="Want to Read"
					/>
					<BookShelf
						shelfName="Read"
					/>
				</div>
			</div>
			<div className="open-search">
              <button>Add a book</button>
            </div>
	    </div>
	)
}


export default ListBooks