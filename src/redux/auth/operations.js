import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleErrorAsyncOperation } from 'utils';

axios.defaults.baseURL = 'https://goose-track-project-backend.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const signUpOperation = createAsyncThunk('auth/signup', async (credentials, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.post('/auth/register', credentials);
    return data;
  }, thunkAPI);
});

const signInOperation = createAsyncThunk('auth/signin', async (credentials, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.post('/auth/login', credentials);
    setAuthHeader(data.token);
    return data;
  }, thunkAPI);
});

const logOutOperation = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    await axios.post('/auth/logout');
    clearAuthHeader();
  }, thunkAPI);
});

const refreshUserOperation = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue({ status: 401, message: 'Please login or register!' });
  }

  return await handleErrorAsyncOperation(async () => {
    setAuthHeader(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
  }, thunkAPI);
});

const updateUserDataOperation = createAsyncThunk('auth/update', async (updateUserData, thunkAPI) => {
  const state = thunkAPI.getState();
  const userId = state.auth.user._id;

  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.patch(`/users/edit/${userId}`, updateUserData);
    return data;
  }, thunkAPI);
});

const updateUserAvatarOperation = createAsyncThunk('auth/updateAvatar', async (formDataAvatar, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.post(`/users/avatars`, formDataAvatar);
    return data;
  }, thunkAPI);
});

const googleAuthOperation = createAsyncThunk('auth/googleAuth', async (token, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    setAuthHeader(token);
    const { data } = await axios.get('/users/current');
    data.token = token;
    return data;
  }, thunkAPI);
});

export {
  signUpOperation,
  signInOperation,
  refreshUserOperation,
  updateUserDataOperation,
  logOutOperation,
  updateUserAvatarOperation,
  googleAuthOperation,
};
