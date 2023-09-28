import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { signUpOperation } from './operations';
import {
  handleRegisterFulfilled,
  handleRegisterRejected,
} from 'utils/reduxActionHandlers/authActionHandlers/registerActionHandlers';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: {
    _id: null,
    name: null,
    email: null,
    userAvatar: null,
    phone: null,
    skype: null,
    birthday: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: build =>
    build
      .addCase(signUpOperation.fulfilled, handleRegisterFulfilled)
      .addCase(signUpOperation.rejected, handleRegisterRejected),
});

const authReducer = authSlice.reducer;

export const persistAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
