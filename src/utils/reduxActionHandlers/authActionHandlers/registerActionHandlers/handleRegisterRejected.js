export const handleRegisterRejected = (_, { payload }) => {
  console.log(`Error with code: ${payload.status}. ${payload.message}`);
};
