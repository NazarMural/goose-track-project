export const handleDeleteTaskPending = (state, { payload }) => {
  state.isTasksLoading = true;
  state.isDeleting = true;
  state.currentTaskId = payload._id;
};
