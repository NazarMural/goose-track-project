export const handleAddTaskFulfilled = (state, { payload }) => {
  state.isTasksLoading = false;
  state.isAdding = false;
  state.tasks.push(payload);
};
