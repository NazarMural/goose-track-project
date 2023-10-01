export const handleErrorAsyncOperation = async (asyncOperation, thunkAPI) => {
  try {
    return await asyncOperation();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.toJSON());
  }
};
