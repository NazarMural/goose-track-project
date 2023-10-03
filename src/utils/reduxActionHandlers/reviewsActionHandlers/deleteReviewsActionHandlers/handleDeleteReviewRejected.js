export const handleDeleteReviewRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
