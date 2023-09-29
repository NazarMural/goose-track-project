export const handleLogoutRejected = (state, { payload }) => {
  console.log(`Error with code: ${payload.status}. ${payload.message}`);
  state.isAuthLoading = false;
};
