import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorAsyncOperation } from 'utils';
import axios from 'axios';

const addReviewOperation = createAsyncThunk('reviews/addReview', async (review, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.post('/reviews/own', review);
    return data;
  }, thunkAPI);
});

const deleteReviewOperation = createAsyncThunk('reviews/deleteReview', async (reviewId, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    await axios.delete(`/reviews/own/${reviewId}`);
    return reviewId;
  }, thunkAPI);
});

const updateReviewOperation = createAsyncThunk('reviews/updateReview', async ({ reviewId, updateReviewData }, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.patch(`/reviews/own/${reviewId}`, updateReviewData);
    return data;
  }, thunkAPI);
});

export { deleteReviewOperation, addReviewOperation, updateReviewOperation };
