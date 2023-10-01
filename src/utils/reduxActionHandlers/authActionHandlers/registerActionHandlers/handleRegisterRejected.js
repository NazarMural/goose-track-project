export const handleRegisterRejected = (state, { payload }) => {
  state.isAuthLoading = false;
  state.error = payload;
};
