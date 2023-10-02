export const handleUpdateUserFulfilled = (state, { payload }) => {
  state.user = { ...state.user, ...payload };
  state.isAuthLoading = false;
  state.isUpdatingUserData = false;
  state.error = null;
};
