export const handleUpdateTaskRejected = (state, { payload }) => {
  state.isTasksLoading = false;
  state.isUpdating = false;
  state.error = payload;
  state.currentTaskId = null;
};
