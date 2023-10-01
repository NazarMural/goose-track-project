export const handleDeleteTaskFulfilled = (state, { payload }) => {
  state.isTasksLoading = false;
  state.isDeleting = false;
  state.error = null;
  const index = state.tasks.findIndex(task => task._id === payload);
  state.tasks.splice(index, 1);
  state.currentTaskId = null;
};
