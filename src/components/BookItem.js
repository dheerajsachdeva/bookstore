import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const [percentage, setPercentage] = useState(45);

  const handleProgress = () => {
    let newPercent = percentage;
    if (newPercent < 100) {
      setPercentage(newPercent += 5);
    }
  };
  return (
    <li className="flex">
      <div className="bookItem">
        <h2 className="title">{book.title}</h2>
        <span className="author">{book.author}</span>
        <div className="buttons">
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
      </div>
      <div className="flex book-progress">
        <div className="flex oval-progress">
          <CircularProgressbar
            className="oval"
            value={percentage}
          />
          <div className="flex text-progress">
            <span className="percent-completed">
              {percentage}
              %
            </span>
            <span className="completed-text">Completed</span>
          </div>
        </div>
        <div className="flex chapter">
          <span className="current-chapter">
            CURRENT CHAPTER
          </span>
          <span className="current-lesson">
            Chapter 17
          </span>
          <button className="update-progress" type="button" onClick={handleProgress}>UPDATE PROGRESS</button>
        </div>
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
