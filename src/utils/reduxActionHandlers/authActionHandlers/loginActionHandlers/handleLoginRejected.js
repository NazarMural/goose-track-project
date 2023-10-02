export const handleLoginRejected = (state, { payload }) => {
  state.isAuthLoading = false;
  state.error = payload;
};
