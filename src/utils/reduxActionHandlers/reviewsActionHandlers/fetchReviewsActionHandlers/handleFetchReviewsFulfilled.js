export const handleFetchReviewsFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.reviewsItem = payload.reviews;
};
