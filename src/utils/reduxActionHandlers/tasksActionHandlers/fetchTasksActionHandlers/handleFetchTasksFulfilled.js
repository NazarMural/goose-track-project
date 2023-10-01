export const handleFetchTasksFulfilled = (state, { payload }) => {
  state.isTasksLoading = false;
  state.isFetchingTasks = false;
  state.tasks = payload;
  state.error = null;
};
