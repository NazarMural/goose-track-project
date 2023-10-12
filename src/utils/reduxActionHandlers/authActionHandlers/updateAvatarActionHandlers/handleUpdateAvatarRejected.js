export const handleUpdateAvatarRejected = (state, { payload }) => {
  state.isUpdatingAvatar = false;
  state.error = payload;
};
