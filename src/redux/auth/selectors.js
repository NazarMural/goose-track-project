const selectUser = state => state.auth.user;
const selectToken = state => state.auth.token;
const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsAuthLoading = state => state.auth.isAuthLoading;
const selectIsRefreshingUser = state => state.auth.isRefreshingUser;

export { selectIsLoggedIn, selectUser, selectToken, selectIsAuthLoading, selectIsRefreshingUser };
