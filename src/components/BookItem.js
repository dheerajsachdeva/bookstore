import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="bookItem">
        <label htmlFor={book.item_id}>
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
          onClick={() => { dispatch(deleteBook(book.item_id)); }}
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
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BookItem;
