export const handleRefreshUserPending = state => {
  state.isAuthLoading = true;
  state.isRefreshingUser = true;
};
