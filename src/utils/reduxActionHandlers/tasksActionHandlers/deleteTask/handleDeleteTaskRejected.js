export const handleDeleteTaskRejected = (state, { payload }) => {
  state.isTasksLoading = false;
  state.isDeleting = false;
  state.error = payload;
};
