# MyReads: A Book Tracking App Project

Creating a bookshelf app that allows the user to select and categorize books they have read, are currently reading, or want to read, and search for more books and add it to the categorized shelves.

## Instructions

In order to run the application follow these steps:

1. Download or Clone the repository
`$ git clone https://github.com/RadwaMohammed/MyReads-A-Book-Tracking-App.git`
2. Navigate to the root directory of the project.
3. Run `npm start` to installs the dependencies required for the project
4. Run the app using `npm start`
5. A new browser window automatically will open the app. If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

> If you are using yarn, use `yarn install` and `yarn start` instead of using npm!

## Dependencies

- [React](https://reactjs.org/)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [npm](https://www.npmjs.com/)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [BooksAPI](src/BooksAPI.js) [Provided by Udacity]

> [BooksAPI.js](src/BooksAPI.js) contains the methods that are required to perform necessary operations on the backend.
> All dependecies are included in the [package.json](package.json) file.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

This repository is for a project in the Front-End Web Developer NanoDegree program at Udacity. Therefore, pull requests will not be accepted.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
