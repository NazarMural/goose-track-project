import { createSelector } from '@reduxjs/toolkit';

const selectAuthState = state => state.auth;
const selectUser = state => state.auth.user;
const selectToken = state => state.auth.token;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsAuthLoading = state => state.auth.isAuthLoading;
const selectIsRefreshingUser = state => state.auth.isRefreshingUser;
const selectIsUpdatingUserData = state => state.auth.isUpdatingUserData;
const selectAuthError = state => state.auth.error;

const selectAuthOperations = createSelector(
  [selectIsRefreshingUser, selectIsUpdatingUserData],
  (isRefreshingUser, isUpdatingUserData) => ({
    isRefreshingUser,
    isUpdatingUserData,
  })
);

export {
  selectIsLoggedIn,
  selectUser,
  selectToken,
  selectIsAuthLoading,
  selectIsRefreshingUser,
  selectIsUpdatingUserData,
  selectAuthError,
  selectAuthState,
  selectAuthOperations,
};
