import { createSlice } from '@reduxjs/toolkit';
import {
  handleAddReviewFulfilled,
  handleAddReviewPending,
  handleAddReviewRejected,
  handleDeleteReviewFulfilled,
  handleDeleteReviewPending,
  handleDeleteReviewRejected,
  handleFetchOwnReviewFulfilled,
  handleFetchOwnReviewPending,
  handleFetchOwnReviewRejected,
  handleUpdateReviewFulfilled,
  handleUpdateReviewPending,
  handleUpdateReviewRejected,
  handleFetchReviewsFulfilled,
  handleFetchReviewsPending,
  handleFetchReviewsRejected,
  handleLogoutInReviewsFulfilled,
} from 'utils/reduxActionHandlers/reviewsActionHandlers';
import {
  fetchAllReviewsOperation,
  fetchOwnReviewOperation,
  addReviewOperation,
  deleteReviewOperation,
  updateReviewOperation,
} from './operations';
import { logOutOperation } from 'redux/auth/operations';

const reviewsInitialState = {
  reviewsItem: [],
  isLoading: false,
  error: null,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: reviewsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchAllReviewsOperation.pending, handleFetchReviewsPending)
      .addCase(fetchAllReviewsOperation.fulfilled, handleFetchReviewsFulfilled)
      .addCase(fetchAllReviewsOperation.rejected, handleFetchReviewsRejected)
      .addCase(fetchOwnReviewOperation.pending, handleFetchOwnReviewPending)
      .addCase(fetchOwnReviewOperation.fulfilled, handleFetchOwnReviewFulfilled)
      .addCase(fetchOwnReviewOperation.rejected, handleFetchOwnReviewRejected)
      .addCase(addReviewOperation.pending, handleAddReviewPending)
      .addCase(addReviewOperation.fulfilled, handleAddReviewFulfilled)
      .addCase(addReviewOperation.rejected, handleAddReviewRejected)
      .addCase(deleteReviewOperation.pending, handleDeleteReviewPending)
      .addCase(deleteReviewOperation.fulfilled, handleDeleteReviewFulfilled)
      .addCase(deleteReviewOperation.rejected, handleDeleteReviewRejected)
      .addCase(updateReviewOperation.pending, handleUpdateReviewPending)
      .addCase(updateReviewOperation.fulfilled, handleUpdateReviewFulfilled)
      .addCase(updateReviewOperation.rejected, handleUpdateReviewRejected)
      .addCase(logOutOperation.fulfilled, handleLogoutInReviewsFulfilled),
});

export const reviewReducer = reviewsSlice.reducer;
