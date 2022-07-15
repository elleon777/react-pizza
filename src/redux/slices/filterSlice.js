import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategotyId(state, action) {
      state.categoryId = action.payload;
    },
  },
});
export const { setCategotyId } = filterSlice.actions;

export default filterSlice;
