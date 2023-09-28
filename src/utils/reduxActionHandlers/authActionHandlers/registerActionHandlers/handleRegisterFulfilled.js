export const handleRegisterFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.user.token;
  state.isLoggedIn = true;
};
