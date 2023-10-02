const selectReviewState = state => state.reviews;

const selectReviews = state => state.reviews.reviewsItem;
const selectIsReviewsLoading = state => state.reviews.isLoading;
const selectReviewsError = state => state.reviews.error;

export { selectIsReviewsLoading, selectReviews, selectReviewsError, selectReviewState };
