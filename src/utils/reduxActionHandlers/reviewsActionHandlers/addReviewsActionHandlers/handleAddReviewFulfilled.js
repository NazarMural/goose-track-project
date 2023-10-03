export const handleAddReviewFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.reviewsItem = [payload.reviewData.review];
};
