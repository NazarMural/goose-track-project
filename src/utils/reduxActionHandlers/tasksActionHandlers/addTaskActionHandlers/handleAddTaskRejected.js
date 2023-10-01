export const handleAddTaskRejected = (state, { payload }) => {
  state.isTasksLoading = false;
  state.isAdding = false;
  state.error = payload;
};
