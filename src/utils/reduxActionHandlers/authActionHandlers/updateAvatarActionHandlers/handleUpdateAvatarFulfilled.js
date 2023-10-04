export const handleUpdateAvatarFulfilled = (state, { payload }) => {
  state.isAuthLoading = false;
  state.isUpdatingAvatar = false;
  state.error = null;
  state.user.avatarURL = payload.file;
};
