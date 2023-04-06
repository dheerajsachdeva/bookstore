import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook, addBook } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };
    dispatch(postBook(book))
      .then(() => {
        dispatch(addBook(book));
        setTitle('');
        setAuthor('');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="Post">
        <h2>ADD NEW BOOK</h2>
        <br />
        <input onChange={(e) => { setTitle(e.target.value); }} type="text" placeholder="Book Title" value={title} required />
        <input onChange={(e) => { setAuthor(e.target.value); }} type="text" placeholder="Author" value={author} required />
        <button className="button" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Books;
