import { handleAddTaskFulfilled, handleAddTaskRejected, handleAddTaskPending } from './addTaskActionHandlers';
import {
  handleDeleteTaskFulfilled,
  handleDeleteTaskRejected,
  handleDeleteTaskPending,
} from './deleteTaskActionHandlers';
import {
  handleFetchTasksFulfilled,
  handleFetchTasksRejected,
  handleFetchTasksPending,
} from './fetchTasksActionHandlers';
import {
  handleUpdateTaskFulfilled,
  handleUpdateTaskRejected,
  handleUpdateTaskPending,
} from './updateTaskActionHandlers';
import { handleLogoutInTasksFulfilled } from './logoutActionHandlersInTasks/handleLogoutInTasksFulfilled';
import { handleTasksActionPending } from './handleTasksActionPending';

export {
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
  handleTasksActionPending,
};
