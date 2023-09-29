const selectUser = state => state.auth.user;
const selectToken = state => state.auth.token;
const selectIsLoggedIn = state => state.auth.isLoggedIn;

export { selectIsLoggedIn, selectUser, selectToken };
