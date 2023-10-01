export const handleFetchTasksRejected = (state, { payload }) => {
  state.isTasksLoading = false;
  state.isFetchingTasks = false;
  state.error = payload;
};
