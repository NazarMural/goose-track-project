export const handleErrorAsyncOperation = async (asyncOperation, thunkAPI) => {
  try {
    return await asyncOperation();
  } catch (e) {
    const error = { status: null, message: '' };
    if (e.response) {
      error.status = e.response.status;
      error.message = e.response.data.message;
    } else if (e.request) {
      error.status = e.request.status;
      error.message = e.message;
    } else {
      error.message = e.message;
    }
    return thunkAPI.rejectWithValue(error);
  }
};
