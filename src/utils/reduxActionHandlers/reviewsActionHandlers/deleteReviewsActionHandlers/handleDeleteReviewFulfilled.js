export const handleDeleteReviewFulfilled = state => {
  state.isLoading = false;
  state.error = null;
  state.reviewsItem = [];
};
