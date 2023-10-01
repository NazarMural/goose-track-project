export const handleLogoutInTasksFulfilled = state => {
  state.isTasksLoading = false;
  state.tasks = [];
  state.error = null;
};
