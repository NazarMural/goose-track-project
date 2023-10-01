export const handleUpdateTaskPending = (state, action) => {
  state.isTasksLoading = true;
  state.isUpdating = true;
  state.currentTaskId = action.meta.arg.taskId;
};
