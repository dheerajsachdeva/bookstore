import React from 'react'
import PropTypes from 'prop-types';

const BookItem = ( {book, deleteBook} ) => {

  return (
    <li>
      <div className="bookItem">
         <label htmlFor={book.id}>
          {book.title}<br></br>
          {book.author}
        </label>
<br></br>
        <button type="button" className="btn btn-comments">
          Comments
        </button>
        <button
          type="button"
          className="btn btn-delete"
        onClick={() => deleteBook(book.id)}
        >
          Remove
        </button>
        <button type="button" className="btn btn-edit">
          Edit
        </button>
      </div>
    </li>
  )
}

BookItem.propTypes = {
  deleteBook: PropTypes.func.isRequired,
  book: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default BookItem