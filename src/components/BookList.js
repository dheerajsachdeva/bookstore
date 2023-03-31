import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ books, deleteBook }) => (
  <ul className="tasklist">
    {books.map((book) => (
      <BookItem
        key={book.id}
        book={book}
        deleteBook={deleteBook}
      />
    ))}

  </ul>
);

BookList.propTypes = {
  deleteBook: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default BookList;
