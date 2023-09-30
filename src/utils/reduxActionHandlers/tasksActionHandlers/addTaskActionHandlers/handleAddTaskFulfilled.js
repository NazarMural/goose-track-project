export const handleAddTaskFulfilled = (state, { payload }) => {
  state.isTasksLoading = false;
  state.isAdding = false;
  state.error = null;
  state.tasks.push(payload);
};
