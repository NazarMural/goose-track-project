export const handleLogoutRejected = (_, { payload }) => {
  console.log(`Error with code: ${payload.status}. ${payload.message}`);
};
