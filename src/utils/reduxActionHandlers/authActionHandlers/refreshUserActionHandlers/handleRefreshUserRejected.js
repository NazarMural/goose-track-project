export const handleRefreshUserRejected = (state, { payload }) => {
  state.isAuthLoading = false;
  state.isRefreshingUser = false;
  state.error = payload;
};
