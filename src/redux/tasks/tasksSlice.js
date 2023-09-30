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
import { fetchTasks, addTask, deleteTask, updateTask } from './operations';
import { logOutOperation } from 'redux/auth/operations';

const initialState = {
  tasks: [],
  isTasksLoading: false,
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
      .addCase(fetchTasks.pending, handleFetchTasksPending)
      .addCase(fetchTasks.fulfilled, handleFetchTasksFulfilled)
      .addCase(fetchTasks.rejected, handleFetchTasksRejected)
      .addCase(addTask.pending, handleAddTaskPending)
      .addCase(addTask.fulfilled, handleAddTaskFulfilled)
      .addCase(addTask.rejected, handleAddTaskRejected)
      .addCase(deleteTask.pending, handleDeleteTaskPending)
      .addCase(deleteTask.fulfilled, handleDeleteTaskFulfilled)
      .addCase(deleteTask.rejected, handleDeleteTaskRejected)
      .addCase(updateTask.pending, handleUpdateTaskPending)
      .addCase(updateTask.fulfilled, handleUpdateTaskFulfilled)
      .addCase(updateTask.rejected, handleUpdateTaskRejected)
      .addCase(logOutOperation.fulfilled, handleLogoutInTasksFulfilled),
});

export const tasksReducer = tasksSlice.reducer;
