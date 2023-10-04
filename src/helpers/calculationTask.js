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

const percentageOfTasks = numbers => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const percentages = numbers.map(num => {
    if (sum === 0) {
      return '0%'; // Якщо сума чисел дорівнює нулю, повертаємо "0%"
    } else {
      return ((num / sum) * 100).toFixed(0) + '%'; // В іншому випадку обчислюємо відсоток
    }
  });
  return percentages;
};

const calculationTasksByCategory = (currentDate, tasks) => {
  const filteredTasksDay = tasks
    ? tasks.filter(({ date }) => date === currentDate)
    : [];

  const numberOfTasksDayByCategory = filteredTasksByCategory(filteredTasksDay);
  const numberOfTasksMonthByCategory = filteredTasksByCategory(tasks);

  const percentageTasksDay = percentageOfTasks(numberOfTasksDayByCategory);
  const percentageTasksMonth = percentageOfTasks(numberOfTasksMonthByCategory);

  return {
    tasksDay: numberOfTasksDayByCategory,
    tasksMonth: numberOfTasksMonthByCategory,
    percentageTasksDay,
    percentageTasksMonth,
  };
};

export default calculationTasksByCategory;
