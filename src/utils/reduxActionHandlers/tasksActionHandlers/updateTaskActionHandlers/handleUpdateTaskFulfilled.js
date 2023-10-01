export const handleUpdateTaskFulfilled = (state, { payload }) => {
  state.isTasksLoading = false;
  state.isUpdating = false;
  const index = state.tasks.findIndex(task => task._id === payload._id);
  state.tasks.splice(index, 1, payload);
  state.error = null;
  state.currentTaskId = null;
};
