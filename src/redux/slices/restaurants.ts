import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../axios';
// import type { PayloadAction } from '@reduxjs/toolkit';

// export interface Restaurant {}

// TODO: generalize below action, set axios defaults
export const fetchRestaurantData = createAsyncThunk(
  'fetchRestaurantData',
  async () => {
    const data = await client.get('/cards');

    return data;
  }
);

const initialState: any = {
  data: [],
  hasError: false,
  isLoading: false
};

export const restaurantCards = createSlice({
  name: 'restaurantCards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRestaurantData.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(fetchRestaurantData.rejected, (state, { payload }) => {
      console.error(payload);
      state.isLoading = false;
    });
  }
});

export default restaurantCards.reducer;
