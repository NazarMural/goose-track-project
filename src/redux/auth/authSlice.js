import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import {
  signUpOperation,
  signInOperation,
  logOutOperation,
  refreshUserOperation,
  updateUserDataOperation,
  updateUserAvatarOperation,
  googleAuthOperation,
} from './operations';
import * as authReducers from 'utils/reduxActionHandlers/authActionHandlers';
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
  isUpdatingAvatar: false,
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
  extraReducers: builder =>
    builder
      .addCase(signUpOperation.pending, authReducers.handleAuthActionPending)
      .addCase(signUpOperation.fulfilled, authReducers.handleRegisterFulfilled)
      .addCase(signUpOperation.rejected, authReducers.handleRegisterRejected)
      .addCase(signInOperation.pending, authReducers.handleAuthActionPending)
      .addCase(signInOperation.fulfilled, authReducers.handleLoginFulfilled)
      .addCase(signInOperation.rejected, authReducers.handleLoginRejected)
      .addCase(logOutOperation.pending, authReducers.handleAuthActionPending)
      .addCase(logOutOperation.fulfilled, authReducers.handleLogoutFulfilled)
      .addCase(logOutOperation.rejected, authReducers.handleLogoutRejected)
      .addCase(refreshUserOperation.pending, authReducers.handleRefreshUserPending)
      .addCase(refreshUserOperation.fulfilled, authReducers.handleRefreshUserFulfilled)
      .addCase(refreshUserOperation.rejected, authReducers.handleRefreshUserRejected)
      .addCase(updateUserDataOperation.pending, authReducers.handleUpdateUserPending)
      .addCase(updateUserDataOperation.fulfilled, authReducers.handleUpdateUserFulfilled)
      .addCase(updateUserDataOperation.rejected, authReducers.handleUpdateUserRejected)
      .addCase(updateUserAvatarOperation.pending, authReducers.handleUpdateAvatarPending)
      .addCase(updateUserAvatarOperation.fulfilled, authReducers.handleUpdateAvatarFulfilled)
      .addCase(updateUserAvatarOperation.rejected, authReducers.handleUpdateAvatarRejected)
      .addCase(googleAuthOperation.pending, authReducers.handleRefreshUserPending)
      .addCase(googleAuthOperation.fulfilled, authReducers.handleRefreshUserFulfilled)
      .addCase(googleAuthOperation.rejected, authReducers.handleRefreshUserRejected),
});

const authReducer = authSlice.reducer;

export const persistAuthReducer = persistReducer(authPersistConfig, authReducer);
