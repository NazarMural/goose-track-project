export const handleLogoutRejected = (state, { payload }) => {
  state.isAuthLoading = false;
  state.error = payload;
};
