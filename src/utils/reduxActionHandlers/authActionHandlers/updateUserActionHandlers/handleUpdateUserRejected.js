export const handleUpdateUserRejected = (state, { payload }) => {
  state.isAuthLoading = false;
  state.isUpdatingUserData = false;
  state.error = payload;
};
