export const handleUpdateUserRejected = (state, { payload }) => {
  state.isUpdatingUserData = false;
  state.error = payload;
};
