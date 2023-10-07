import { createSlice } from '@reduxjs/toolkit';
import * as tasksReducers from 'utils/reduxActionHandlers/tasksActionHandlers';
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
      .addCase(fetchTasksOperation.pending, tasksReducers.handleFetchTasksPending)
      .addCase(fetchTasksOperation.fulfilled, tasksReducers.handleFetchTasksFulfilled)
      .addCase(fetchTasksOperation.rejected, tasksReducers.handleFetchTasksRejected)
      .addCase(addTaskOperation.pending, tasksReducers.handleAddTaskPending)
      .addCase(addTaskOperation.fulfilled, tasksReducers.handleAddTaskFulfilled)
      .addCase(addTaskOperation.rejected, tasksReducers.handleAddTaskRejected)
      .addCase(deleteTaskOperation.pending, tasksReducers.handleDeleteTaskPending)
      .addCase(deleteTaskOperation.fulfilled, tasksReducers.handleDeleteTaskFulfilled)
      .addCase(deleteTaskOperation.rejected, tasksReducers.handleDeleteTaskRejected)
      .addCase(updateTaskOperation.pending, tasksReducers.handleUpdateTaskPending)
      .addCase(updateTaskOperation.fulfilled, tasksReducers.handleUpdateTaskFulfilled)
      .addCase(updateTaskOperation.rejected, tasksReducers.handleUpdateTaskRejected)
      .addCase(logOutOperation.fulfilled, tasksReducers.handleLogoutInTasksFulfilled),
});

export const tasksReducer = tasksSlice.reducer;
