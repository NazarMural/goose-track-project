export const handleUpdateReviewRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
