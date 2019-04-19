import React from 'react'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
// import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
    render() {
        return (
            <div className="app">
                <ListBooks />
                <SearchBooks />
            </div>
        )
    }
}

export default BooksApp
