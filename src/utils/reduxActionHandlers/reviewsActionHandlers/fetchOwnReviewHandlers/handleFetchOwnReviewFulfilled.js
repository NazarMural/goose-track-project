export const handleFetchOwnReviewFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.reviewsItem = payload.review;
};
