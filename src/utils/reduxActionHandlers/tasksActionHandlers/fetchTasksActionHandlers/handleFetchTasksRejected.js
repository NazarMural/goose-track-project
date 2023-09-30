export const handleFetchTasksRejected = (state, { payload }) => {
  state.isTasksLoading = false;
  state.error = payload;
};
