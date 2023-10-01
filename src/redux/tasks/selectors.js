import { createSelector } from '@reduxjs/toolkit';

const selectTasksState = state => state.tasks;
const selectTasks = state => state.tasks.tasks;
const selectTasksError = state => state.tasks.error;
const selectIsTasksLoading = state => state.tasks.isTasksLoading;
const selectIsFetchingTasks = state => state.tasks.isFetchingTasks;
const selectIsAdding = state => state.tasks.isAdding;
const selectIsDeleting = state => state.tasks.isDeleting;
const selectIsUpdating = state => state.tasks.isUpdating;
const selectCurrentTaskId = state => state.tasks.currentTaskId;

const selectTaskOperations = createSelector(
  [selectIsFetchingTasks, selectIsAdding, selectIsDeleting, selectIsUpdating],
  (isFetchingTasks, isAdding, isDeleting, isUpdating) => ({
    isFetchingTasks,
    isAdding,
    isDeleting,
    isUpdating,
  })
);

export {
  selectTasks,
  selectCurrentTaskId,
  selectTasksError,
  selectIsAdding,
  selectIsDeleting,
  selectIsTasksLoading,
  selectIsUpdating,
  selectIsFetchingTasks,
  selectTaskOperations,
  selectTasksState,
};
