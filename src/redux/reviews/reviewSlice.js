import { createSlice } from '@reduxjs/toolkit';
import * as reviewsReducers from 'utils/reduxActionHandlers/reviewsActionHandlers';
import {
  fetchAllReviewsOperation,
  fetchOwnReviewOperation,
  addReviewOperation,
  deleteReviewOperation,
  updateReviewOperation,
} from './operations';
import { logOutOperation, signInOperation } from 'redux/auth/operations';

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
      .addCase(fetchAllReviewsOperation.pending, reviewsReducers.handleFetchReviewsPending)
      .addCase(fetchAllReviewsOperation.fulfilled, reviewsReducers.handleFetchReviewsFulfilled)
      .addCase(fetchAllReviewsOperation.rejected, reviewsReducers.handleFetchReviewsRejected)
      .addCase(fetchOwnReviewOperation.pending, reviewsReducers.handleFetchOwnReviewPending)
      .addCase(fetchOwnReviewOperation.fulfilled, reviewsReducers.handleFetchOwnReviewFulfilled)
      .addCase(fetchOwnReviewOperation.rejected, reviewsReducers.handleFetchOwnReviewRejected)
      .addCase(addReviewOperation.pending, reviewsReducers.handleAddReviewPending)
      .addCase(addReviewOperation.fulfilled, reviewsReducers.handleAddReviewFulfilled)
      .addCase(addReviewOperation.rejected, reviewsReducers.handleAddReviewRejected)
      .addCase(deleteReviewOperation.pending, reviewsReducers.handleDeleteReviewPending)
      .addCase(deleteReviewOperation.fulfilled, reviewsReducers.handleDeleteReviewFulfilled)
      .addCase(deleteReviewOperation.rejected, reviewsReducers.handleDeleteReviewRejected)
      .addCase(updateReviewOperation.pending, reviewsReducers.handleUpdateReviewPending)
      .addCase(updateReviewOperation.fulfilled, reviewsReducers.handleUpdateReviewFulfilled)
      .addCase(updateReviewOperation.rejected, reviewsReducers.handleUpdateReviewRejected)
      .addCase(logOutOperation.fulfilled, reviewsReducers.handleLogoutInReviewsFulfilled)
      .addCase(signInOperation.fulfilled, reviewsReducers.handleLoginInReviewsFulfilled),
});

export const reviewReducer = reviewsSlice.reducer;
