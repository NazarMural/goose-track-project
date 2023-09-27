import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://goose-track-project-backend.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const signUpOperation = createAsyncThunk('auth/signup', async (credentials, thunkAPI) => { })
const signInOperation = createAsyncThunk('auth/signin', async (credentials, thunkAPI) => { })
const logOutOperation = createAsyncThunk('auth/logout', async (_, thunkAPI) => { })
const refreshUserOperation = createAsyncThunk('auth/refresh', async (_, thunkAPI) => { })
const updateUserDataOperation = createAsyncThunk('auth/update', async (updateUserData, thunkAPI) => { })