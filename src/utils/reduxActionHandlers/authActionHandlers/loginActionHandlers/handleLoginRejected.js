export const handleLoginRejected = (_, { payload }) => {
  console.log(`Error with code: ${payload.status}. ${payload.message}`);
};
