import PropTypes from 'prop-types';
import React from 'react';
import Book from './Book';

function BookShelf (props) {
	const { shelfName, books, moveBook } = props;

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
									moveBook={moveBook}
								/>
							</li>
						))
					}

				</ol>
			</div>
		</div>
	);
}

/* validate data types */
BookShelf.propTypes = {
	books: PropTypes.array.isRequired,
	shelfName: PropTypes.string.isRequired,
	moveBook: PropTypes.func.isRequired
}

export default BookShelf;