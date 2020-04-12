const booksByAuthor = require('./fixtures/books')

// without using loops...

// 1. create an array that contains all books by all authors
const allBooks = []

// 2. write a function that accepts an array of books as an argument, and returns an array of titles
const getBookTitles = (books) => {}

// 3. write a function that accepts an array of books as an argument, and returns an array of books sorted by date released, ascending
const sortByDateAscending = (books) => {}

// 4. write a function that accepts an array of books and a property of a book, e.g. "publication_day", as arguments
// and returns an array of books sorted by that property
const getSortedByProperty = (books, property) => {}

// 5. write a function that accepts an array of books as an argument, and returns the three highest rated books
const getTopThree = (books) => {}

// 6. write a function that accepts an array of books and a property of a book, e.g. "publication_day", as arguments,
// and returns the top three books
const getTopThreeByProperty = (books, property) => {}

// 7. determine the best author:
// first describe and then implement your algorithm for choosing the best author
const bestAuthor = null

// 8. select the top rated book of each author
const topBooksOnePerAuthor = null

// 9. select a random book
const randomBook = null

// 10. define a function that selects a random book
const getRandomBook = (books) => {}

// 11. define a book utility class that performs some of the functions above
// desired usage:
//
// const library = new Library(allBooks)
// library.getTopThree('publication_year') // get the most recent 3
// library.getTopThree('average_rating') // get the highest rated 3
// library.getTopThree('ratings_count') // get the ones with the most ratings
//
class Library {
  constructor(books) {
    //
  }

  getTopThree(property) {
    //
  }

  sortedByProperty(property) {
    //
  }
}
