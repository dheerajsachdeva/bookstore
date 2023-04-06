import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appID = 'zS1B52FY0nQd0W3qviKp';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appID}/books/`;

const initialState = {
  books: [],
  isLoading: false,
  isError: false,
  ifSuccess: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    const response = await axios.delete(url + id);
    return response;
  } catch (error) {
    return error;
  }
});

export const postBook = createAsyncThunk('books/postBook', async (book) => {
  try {
    const response = await axios.post(url, book);
    return response.data;
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push({
        item_id: payload.item_id,
        title: payload.title,
        author: payload.author,
        category: payload.category,
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const bookList = action.payload;
      const newBookList = [];
      console.log(Object.keys(bookList))
      Object.keys(bookList).forEach((book) => newBookList.push({
        item_id: book,
        title: bookList[book][0].title,
        author: bookList[book][0].author,
      }));
      return ({
        ...state,
        books: newBookList,
        isLoading: false,
      });
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(postBook.pending, (state) => {
      state.isError = false;
    });
    builder.addCase(postBook.fulfilled, (state) => {
      state.isError = false;
    });
    builder.addCase(postBook.rejected, (state) => {
      state.isError = true;
    });
    builder.addCase(deleteBook.pending, (state) => {
      state.ifSuccess = false;
    });
    builder.addCase(deleteBook.fulfilled, (state) => {
      state.ifSuccess = true;
    });
    builder.addCase(deleteBook.rejected, (state) => {
      state.ifSuccess = false;
    });
  },
});

export default booksSlice.reducer;
export const { addBook } = booksSlice.actions;
