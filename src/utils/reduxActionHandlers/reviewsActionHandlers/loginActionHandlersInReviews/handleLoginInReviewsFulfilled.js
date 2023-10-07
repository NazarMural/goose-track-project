export const handleLoginInReviewsFulfilled = state => {
  state.isLoading = false;
  state.error = null;
  state.reviewsItem = [];
};
