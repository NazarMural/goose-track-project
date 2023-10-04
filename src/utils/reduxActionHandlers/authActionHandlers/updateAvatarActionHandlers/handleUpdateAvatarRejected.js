export const handleUpdateAvatarRejected = (state, { payload }) => {
  state.isAuthLoading = false;
  state.isUpdatingAvatar = false;
  state.error = payload;
};
