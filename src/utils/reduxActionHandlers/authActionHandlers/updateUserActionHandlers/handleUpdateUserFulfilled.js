export const handleUpdateUserFulfilled = (state, { payload }) => {
  state.user = { ...state.user, ...payload };
  state.isUpdatingUserData = false;
  state.error = null;
};
