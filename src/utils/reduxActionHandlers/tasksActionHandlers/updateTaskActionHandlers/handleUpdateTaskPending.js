export const handleUpdateTaskPending = (state, { payload }) => {
  state.isTasksLoading = true;
  state.isUpdating = true;
  state.currentTaskId = payload._id;
};
