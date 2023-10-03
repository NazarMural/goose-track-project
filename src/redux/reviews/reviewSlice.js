
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://goose-track-project-backend.onrender.com/api/';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/reviews');
      return response.data.reviews;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const reviewsInitialState = {
  reviewsItem: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFetchReviewsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.reviewsItem = action.payload;
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: reviewsInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchReviews.pending, handlePending)
      .addCase(fetchReviews.fulfilled, handleFetchReviewsFulfilled)
      .addCase(fetchReviews.rejected, handleRejected),
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  reviewsSlice.actions;

export const reviewReducer = reviewsSlice.reducer;
