export const handleAddReviewRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
