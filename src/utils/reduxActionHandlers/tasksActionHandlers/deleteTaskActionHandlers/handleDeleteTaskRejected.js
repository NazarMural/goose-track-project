export const handleDeleteTaskRejected = (state, { payload }) => {
  console.log('payloadDelT: ', payload);
  state.isTasksLoading = false;
  state.isDeleting = false;
  state.currentTaskId = null;
  state.error = payload;
};
