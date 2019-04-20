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
        })
    }

    render() {
        const { books } = this.state

        return (
             <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks books={books} />
                )}/>
                <Route path="/Search" render={() => (
                    <SearchBooks />
                )}/>
            </div>
        )
    }
}

export default BooksApp
