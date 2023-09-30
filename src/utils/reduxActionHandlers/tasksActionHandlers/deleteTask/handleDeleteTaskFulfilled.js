export const handleDeleteTaskFulfilled = (state, { payload }) => {
    state.isTasksLoading = false;
    state.isDeleting = false;
    const index = state.tasks.findIndex(task => task._id === payload._id);
    state.tasks.splice(index, 1);
};
