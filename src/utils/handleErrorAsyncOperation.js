export const handleErrorAsyncOperation = async (asyncOperation, thunkAPI) => {
  try {
      return await asyncOperation();
    } catch (e) {
      const { status, message } = e.toJSON();
      return thunkAPI.rejectWithValue({ status, message });
    }
};