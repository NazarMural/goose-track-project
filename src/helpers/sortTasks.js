const filteredTasksByCategory = tasks => {
  const toDoTasks = tasks
    ? tasks.filter(({ category }) => category === 'to-do')
    : [];
  const inProgressTasks = tasks
    ? tasks.filter(({ category }) => category === 'in-progress')
    : [];
  const doneTasks = tasks
    ? tasks.filter(({ category }) => category === 'done')
    : [];
  return [toDoTasks.length, inProgressTasks.length, doneTasks.length];
};

const sortTasksCurrentDay = (currentDate, tasks) => {
  const filteredTasksDay = tasks
    ? tasks.filter(({ date }) => date === currentDate)
    : [];

  const numberOfTasksDayByCategory = filteredTasksByCategory(filteredTasksDay);
  const numberOfTasksMonthByCategory = filteredTasksByCategory(tasks);

  return {
    tasksDay: numberOfTasksDayByCategory,
    tasksMonth: numberOfTasksMonthByCategory,
  };
};

export default sortTasksCurrentDay;
