import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
    state = {
        books : []
    }

    /* get all books currently in the bookshelves in my app */
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        }).catch((error) => { console.log ('Error on getting all books') })
    }

    /* move book between shelves */
    moveBook = (currentBook, shelf) => {
        BooksAPI.update(currentBook, shelf).then(() => {
            // change the book's shelf
            currentBook.shelf = shelf;
            // update state with current book that moved to another shelf
            const updatedBooks = this.state.books.filter(book => book.id !== currentBook.id);
            this.setState( {books: [...updatedBooks, currentBook]})
        }).catch((error) => { console.log ('Error on moving book') })
    }

    render() {
        const { books } = this.state

        return (
             <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks
                        books={books}
                        moveBook={this.moveBook}
                    />
                )}/>
                <Route path="/Search" render={() => (
                    <SearchBooks
                        books={books}
                        moveBook={this.moveBook}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
