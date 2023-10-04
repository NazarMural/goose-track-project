export const handleUpdateReviewFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.reviewsItem[0] = payload.reviewData;
};
