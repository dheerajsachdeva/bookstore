import React from 'react'
import BookItem from './BookItem'
import PropTypes from 'prop-types';

const BookList = ( { books, deleteBook } ) => {
  return (
    <ul className="tasklist">
    {books.map((book) => (
      <BookItem
        key= {book.id}
       book = {book}
        deleteBook = {deleteBook}
      />
    ))}

  </ul>
  )
}

BookList.propTypes = {
  deleteBook: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default BookList