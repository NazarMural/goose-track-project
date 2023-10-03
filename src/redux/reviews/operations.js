import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorAsyncOperation } from 'utils';
import axios from 'axios';

const fetchAllReviewsOperation = createAsyncThunk('reviews/fetchAllReviews', async (_, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.get('/reviews');
    return data;
  }, thunkAPI);
});

const fetchOwnReviewOperation = createAsyncThunk('reviews/getOwnReview', async (_, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.get('/reviews/own');
    return data;
  }, thunkAPI);
});

const addReviewOperation = createAsyncThunk('reviews/addReview', async (review, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.post('/reviews/own', review);
    return data;
  }, thunkAPI);
});

const deleteReviewOperation = createAsyncThunk('reviews/deleteReview', async (_, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    await axios.delete(`/reviews/own`);
  }, thunkAPI);
});

const updateReviewOperation = createAsyncThunk('reviews/updateReview', async (updateReviewData, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.patch(`/reviews/own`, updateReviewData);
    return data;
  }, thunkAPI);
});

export {
  deleteReviewOperation,
  addReviewOperation,
  updateReviewOperation,
  fetchOwnReviewOperation,
  fetchAllReviewsOperation,
};
