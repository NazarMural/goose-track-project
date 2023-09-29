export const handleUpdateUserFulfilled = (state, { payload }) => {
  state.user = { ...state.user, ...payload };
  state.isAuthLoading = false;
};
