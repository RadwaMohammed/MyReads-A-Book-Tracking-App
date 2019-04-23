import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';


function ListBooks (props) {
	const { books, moveBook } = props;
	const shelves = [
		{ title: 'Currently Reading', key: 'currentlyReading' },
		{ title: 'Want To Read', key: 'wantToRead' },
		{ title: 'Read', key: 'read' }
	];
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>
					{
						shelves.map( (shelf, index) =>
							(<BookShelf
								key={index}
								shelfName={shelf.title}
								books={ books.filter(book => book.shelf === shelf.key) }
								moveBook={moveBook}
							/>)
						)

					}

				</div>
			</div>
			<div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
	    </div>
	);
}

/* validate data types */
ListBooks.propTypes = {
	books: PropTypes.array.isRequired,
	moveBook: PropTypes.func.isRequired
}

export default ListBooks;