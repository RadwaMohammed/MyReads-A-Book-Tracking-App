import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
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
			if(query && query.length > 0) {
				BooksAPI.search(query).then(searchedBooks => {
					this.setState({ searchedBooks: searchedBooks });
				}).catch(error => {
					console.log('error on searching books');
					this.setState({ searchedBooks: [] });
				})
			} else {
				this.setState({ searchedBooks: [] });
			}
		})

	}


	render() {

		const { moveBook } = this.props
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
					<ol className="books-grid">
						{
							/* condition to be sure that Search results are not shown when
							 * all of the text is deleted out of the search input box
							*/
							(searchedBooks.length > 0 && query.length > 0) &&(
								searchedBooks.map(searchedBook => (
									<li key={searchedBook.id}>
										<Book
											book={searchedBook}
											moveBook={moveBook}
											bookShelf={searchedBook.shelf}
										/>
									</li>
								))
							)
						}
					</ol>
	            </div>
          </div>
		)
	}
}

export default SearchBooks