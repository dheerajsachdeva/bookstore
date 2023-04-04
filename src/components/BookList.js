import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const { books } = useSelector((store) => store.books);
  return (
    <>
      <ul className="tasklist">
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
          />
        ))}

      </ul>
    </>
  );
};

export default BookList;
