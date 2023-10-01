import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import {
  signUpOperation,
  signInOperation,
  logOutOperation,
  refreshUserOperation,
  updateUserDataOperation,
} from './operations';
import {
  handleRegisterFulfilled,
  handleRegisterRejected,
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleLoginRejected,
  handleLogoutRejected,
  handleRefreshUserFulfilled,
  handleRefreshUserRejected,
  handleRefreshUserPending,
  handleUpdateUserPending,
  handleUpdateUserFulfilled,
  handleUpdateUserRejected,
  handleAuthActionPending,
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
  isAuthLoading: false,
  isUpdatingUserData: false,
  error: null,
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
      .addCase(signUpOperation.pending, handleAuthActionPending)
      .addCase(signUpOperation.fulfilled, handleRegisterFulfilled)
      .addCase(signUpOperation.rejected, handleRegisterRejected)
      .addCase(signInOperation.pending, handleAuthActionPending)
      .addCase(signInOperation.fulfilled, handleLoginFulfilled)
      .addCase(signInOperation.rejected, handleLoginRejected)
      .addCase(logOutOperation.pending, handleAuthActionPending)
      .addCase(logOutOperation.fulfilled, handleLogoutFulfilled)
      .addCase(logOutOperation.rejected, handleLogoutRejected)
      .addCase(refreshUserOperation.pending, handleRefreshUserPending)
      .addCase(refreshUserOperation.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUserOperation.rejected, handleRefreshUserRejected)
      .addCase(updateUserDataOperation.pending, handleUpdateUserPending)
      .addCase(updateUserDataOperation.fulfilled, handleUpdateUserFulfilled)
      .addCase(updateUserDataOperation.rejected, handleUpdateUserRejected),
});

const authReducer = authSlice.reducer;

export const persistAuthReducer = persistReducer(authPersistConfig, authReducer);
