export const handleLogoutInReviewsFulfilled = state => {
  state.isLoading = false;
  state.error = null;
  state.reviewsItem = [];
};
