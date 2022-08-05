import { TCartItem } from './cartSlice';
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

// type TFetchPizzasArgs = Record<string, string>; //говорит что объект со строчками

export const fetchPizzas = createAsyncThunk<TCartItem[], Record<string, string>>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { categoryId, sort, currentPage, search } = params;
    const { data } = await axios.get<TCartItem[]>(
      `https://62a4844e47e6e40063941e8f.mockapi.io/items?page=${currentPage}&limit=8&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sort.sortProperty}&order=desc${search}`,
    );
    return data;
  },
);

type TPizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
  count: number;
};

interface IPizzaSliceState {
  items: TPizza;
  status: 'loading' | 'success' | 'error';
}

const initialState: IPizzaSliceState = {
  items: [],
  status: 'loading',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
