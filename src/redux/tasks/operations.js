import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorAsyncOperation } from 'utils';
import axios from 'axios';

const fetchTasksOperation = createAsyncThunk('tasks/fetchUserTasks', async (queryParams = {}, thunkAPI) => {
  const params = new URLSearchParams(queryParams);
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.get(`/tasks?${params}`);
    return data;
  }, thunkAPI);
});

const addTaskOperation = createAsyncThunk('tasks/addTask', async (task, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.post('/tasks', task);
    return data;
  }, thunkAPI);
});

const deleteTaskOperation = createAsyncThunk('tasks/deleteTask', async (taskId, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    await axios.delete(`/tasks/${taskId}`);
    return taskId;
  }, thunkAPI);
});

const updateTaskOperation = createAsyncThunk('tasks/updateTask', async ({ taskId, updateTaskData }, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.patch(`/tasks/${taskId}`, updateTaskData);
    return data;
  }, thunkAPI);
});

export { fetchTasksOperation, addTaskOperation, deleteTaskOperation, updateTaskOperation };
