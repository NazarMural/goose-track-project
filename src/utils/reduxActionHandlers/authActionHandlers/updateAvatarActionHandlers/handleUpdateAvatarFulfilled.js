export const handleUpdateAvatarFulfilled = (state, { payload }) => {
  state.isUpdatingAvatar = false;
  state.error = null;
  state.user.avatarURL = payload.file;
};
