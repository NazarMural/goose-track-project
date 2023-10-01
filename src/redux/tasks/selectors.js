const selectTasks = state => state.tasks.tasks;
const selectError = state => state.tasks.error;
const selectIsTasksLoading = state => state.tasks.isTasksLoading;
const selectIsAdding = state => state.tasks.isAdding;
const selectIsDeleting = state => state.tasks.isDeleting;
const selectIsUpdating = state => state.tasks.isUpdating;
const selectCurrentTaskId = state => state.tasks.currentTaskId;

export {
  selectTasks,
  selectCurrentTaskId,
  selectError,
  selectIsAdding,
  selectIsDeleting,
  selectIsTasksLoading,
  selectIsUpdating,
};
