import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => 'Under Construction...',
  },

});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
