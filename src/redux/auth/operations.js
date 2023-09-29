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

const signUpOperation = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    return await handleErrorAsyncOperation(async () => {
      const { data } = await axios.post('/auth/register', credentials);
      return data;
    }, thunkAPI);
  }
);

const signInOperation = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    return await handleErrorAsyncOperation(async () => {
      const { data } = await axios.post('/auth/login', credentials);
      setAuthHeader(data.token);
      return data;
    }, thunkAPI);
  }
);

const logOutOperation = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {}
);

const refreshUserOperation = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {}
);

const updateUserDataOperation = createAsyncThunk(
  'auth/update',
  async (updateUserData, thunkAPI) => {}
);

export {
  signUpOperation,
  signInOperation,
  refreshUserOperation,
  updateUserDataOperation,
};
