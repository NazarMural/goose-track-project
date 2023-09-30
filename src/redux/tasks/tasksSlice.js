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
import { fetchTasks } from './operations';

const initialState = {
  tasks: [],
  isTasksLoading: false,
  isAdding: false,
  isDeleting: false,
  isUpdating: false,
  taskId: null,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: builder =>
    builder.addCase(fetchTasks.fulfilled, handleFetchTasksFulfilled),
});

export const tasksReducer = tasksSlice.reducer;
