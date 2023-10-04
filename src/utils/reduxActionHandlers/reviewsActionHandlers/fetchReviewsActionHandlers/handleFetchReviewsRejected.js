export const handleFetchReviewsRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
