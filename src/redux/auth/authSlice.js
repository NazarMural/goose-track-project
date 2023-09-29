import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { signUpOperation, signInOperation, logOutOperation } from './operations';
import {
  handleRegisterFulfilled,
  handleRegisterRejected,
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleLoginRejected,
  handleLogoutRejected,
} from 'utils/reduxActionHandlers/authActionHandlers';
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
  isRefreshingUser: false,
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
      .addCase(signUpOperation.rejected, handleRegisterRejected)
      .addCase(signInOperation.fulfilled, handleLoginFulfilled)
      .addCase(signInOperation.rejected, handleLoginRejected)
      .addCase(logOutOperation.fulfilled, handleLogoutFulfilled)
      .addCase(logOutOperation.rejected, handleLogoutRejected),
});

const authReducer = authSlice.reducer;

export const persistAuthReducer = persistReducer(authPersistConfig, authReducer);
