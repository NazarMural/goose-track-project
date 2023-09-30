import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrorAsyncOperation } from 'utils';
import axios from 'axios';

const fetchTasks = createAsyncThunk('tasks/fetchUserTasks', async (_, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.get('/tasks');
    return data;
  }, thunkAPI);
});

const addTask = createAsyncThunk('tasks/addTask', async (task, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.post('/tasks', task);
    return data;
  }, thunkAPI);
});

const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.delete(`/tasks/${taskId}`);
    return data;
  }, thunkAPI);
});

const updateTask = createAsyncThunk('tasks/updateTask', async ({ taskId, updateTaskData }, thunkAPI) => {
  return await handleErrorAsyncOperation(async () => {
    const { data } = await axios.patch(`/tasks/${taskId}`, updateTaskData);
    return data;
  }, thunkAPI);
});

export { fetchTasks, addTask, deleteTask, updateTask };
