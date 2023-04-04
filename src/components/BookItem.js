import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="bookItem">
        <label htmlFor={book.id}>
          {book.title}
          <br />
          {book.author}
        </label>
        <br />
        <button type="button" className="btn btn-comments">
          Comments
        </button>
        <button
          type="button"
          className="btn btn-delete"
          onClick={() => dispatch(removeBook(book.id))}
        >
          Remove
        </button>
        <button type="button" className="btn btn-edit">
          Edit
        </button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default BookItem;
