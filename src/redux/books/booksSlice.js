import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.push({ id: payload.id, title: payload.title, author: payload.author });
    },
    removeBook: (state, { payload }) => {
      state.filter((book) => book.id !== payload.id);
    },

  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
