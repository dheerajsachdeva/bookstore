import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from './BookItem';
import { fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const {
    books, isLoading, isError, ifSuccess,
  } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, ifSuccess]);

  if (isLoading) return <h2>Loading...Please wait...</h2>;
  if (isError) return <h2>An error has occured</h2>;
  if (books.length === 0) return <h2>Buddy, please add some books first</h2>;

  return (
    <>
      <ul className="tasklist">
        {books.map((book) => (
          <BookItem
            key={book.item_id}
            book={book}
          />
        ))}

      </ul>
    </>
  );
};

export default BookList;
