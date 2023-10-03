export const handleFetchOwnReviewRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
