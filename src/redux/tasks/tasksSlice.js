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
} from 'utils/reduxActionHandlers/tasksActionHandlers';
import { fetchTasks, addTask, deleteTask, updateTask } from './operations';

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
      .addCase(fetchTasks.fulfilled, handleFetchTasksFulfilled)
      .addCase(fetchTasks.rejected, handleFetchTasksRejected)
      .addCase(addTask.fulfilled, handleAddTaskFulfilled)
      .addCase(addTask.rejected, handleAddTaskRejected)
      .addCase(deleteTask.fulfilled, handleDeleteTaskFulfilled)
      .addCase(deleteTask.rejected, handleDeleteTaskRejected)
      .addCase(updateTask.fulfilled, handleUpdateTaskFulfilled)
      .addCase(updateTask.rejected, handleUpdateTaskRejected),
});

export const tasksReducer = tasksSlice.reducer;
