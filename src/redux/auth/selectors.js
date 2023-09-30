const selectUser = state => state.auth.user;
const selectToken = state => state.auth.token;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsAuthLoading = state => state.auth.isAuthLoading;

export { selectIsLoggedIn, selectUser, selectToken, selectIsAuthLoading };
