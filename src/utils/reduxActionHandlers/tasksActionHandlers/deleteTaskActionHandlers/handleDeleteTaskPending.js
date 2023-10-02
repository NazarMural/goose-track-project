export const handleDeleteTaskPending = (state, action) => {
  state.isTasksLoading = true;
  state.isDeleting = true;
  state.currentTaskId = action.meta.arg;
};
