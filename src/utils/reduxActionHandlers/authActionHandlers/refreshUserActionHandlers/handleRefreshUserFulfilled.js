export const handleRefreshUserFulfilled = (state, { payload }) => {
  state.user = payload.currentUser;
  state.isLoggedIn = true;
  state.isAuthLoading = false;
  state.isRefreshingUser = false;
  state.error = null;
};
