import { createSlice } from '@reduxjs/toolkit';
import {
  handleAddTaskFulfilled,
  handleAddTaskRejected,
  handleDeleteTaskFulfilled,
  handleDeleteTaskRejected,
  handleFetchTasksFulfilled,
  handleFetchTasksRejected,
  handleUpdateTaskFulfilled,
  handleUpdateTaskRejected,
  handleAddTaskPending,
  handleDeleteTaskPending,
  handleFetchTasksPending,
  handleUpdateTaskPending,
  handleLogoutInTasksFulfilled,
} from 'utils/reduxActionHandlers/tasksActionHandlers';
import { fetchTasksOperation, addTaskOperation, deleteTaskOperation, updateTaskOperation } from './operations';
import { logOutOperation } from 'redux/auth/operations';

const initialState = {
  tasks: [],
  isTasksLoading: false,
  isFetchingTasks: false,
  isAdding: false,
  isDeleting: false,
  isUpdating: false,
  currentTaskId: null,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchTasksOperation.pending, handleFetchTasksPending)
      .addCase(fetchTasksOperation.fulfilled, handleFetchTasksFulfilled)
      .addCase(fetchTasksOperation.rejected, handleFetchTasksRejected)
      .addCase(addTaskOperation.pending, handleAddTaskPending)
      .addCase(addTaskOperation.fulfilled, handleAddTaskFulfilled)
      .addCase(addTaskOperation.rejected, handleAddTaskRejected)
      .addCase(deleteTaskOperation.pending, handleDeleteTaskPending)
      .addCase(deleteTaskOperation.fulfilled, handleDeleteTaskFulfilled)
      .addCase(deleteTaskOperation.rejected, handleDeleteTaskRejected)
      .addCase(updateTaskOperation.pending, handleUpdateTaskPending)
      .addCase(updateTaskOperation.fulfilled, handleUpdateTaskFulfilled)
      .addCase(updateTaskOperation.rejected, handleUpdateTaskRejected)
      .addCase(logOutOperation.fulfilled, handleLogoutInTasksFulfilled),
});

export const tasksReducer = tasksSlice.reducer;
