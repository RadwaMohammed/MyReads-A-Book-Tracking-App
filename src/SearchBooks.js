import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
	state = {
		query: '',
		searchedBooks: []
	}

	/* search for book */
	searchBooks = (query) =>{
		this.setState({ query: query.trimStart() }, ()=>{
			/* if user types into the search field run the search*/
			if(query && query.length > 0) {
				BooksAPI.search(query).then(searchedBooks => {
					/* set the correct shelf for searched books*/
					searchedBooks.forEach(searchedBook=>{
						searchedBook.shelf = 'none';
						this.props.books.forEach(book=>{
							if(book.id === searchedBook.id) {
		                        searchedBook.shelf = book.shelf;
		                   }
						})
					})
				this.setState({ searchedBooks: searchedBooks });
				}).catch(error => {
					console.log('error on searching books');
					this.setState({ searchedBooks: [] });
				})
			} else {
				/*if query is empty reset the searchedBooks state*/
				this.setState({ searchedBooks: [] });
			}
		})

	}

	render() {
		const {  moveBook } = this.props
		const { query, searchedBooks } = this.state

		return (
			<div className="search-books">
	            <div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={query}
							onChange={(event) => this.searchBooks(event.target.value)}
						/>
					</div>
	            </div>
	            <div className="search-books-results">

					{
						/* condition to be sure that Search results are not shown when
						 * all of the text is deleted out of the search input box
						*/
						(searchedBooks.length > 0 && query.length > 0) &&(
							<ol className="books-grid">
								{searchedBooks.map(searchedBook =>
									(<li key={searchedBook.id}>
											<Book
												book={searchedBook}
												moveBook={moveBook}
												bookShelf={searchedBook.shelf}
											/>
									</li>)
								)}
							</ol>
						)
					}

	            </div>
          </div>
		)
	}
}

/* validate data types */
SearchBooks.propTypes = {
	books: PropTypes.array.isRequired,
	moveBook: PropTypes.func.isRequired
}

export default SearchBooks