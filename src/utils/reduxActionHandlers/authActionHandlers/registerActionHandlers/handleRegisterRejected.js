export const handleRegisterRejected = (state, { payload }) => {
  console.log(`Error with code: ${payload.status}. ${payload.message}`);
  state.isAuthLoading = false;
};
