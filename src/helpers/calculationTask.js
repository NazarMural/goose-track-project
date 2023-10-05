const filteredTasksByCategory = (tasks, category) =>
  tasks
    ? tasks.filter(({ category: taskCategory }) => taskCategory === category)
        .length
    : 0;

const percentageOfTasks = numbers => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return numbers.map(num =>
    sum === 0 ? '0%' : `${((num / sum) * 100).toFixed(0)}%`
  );
};

const getCategoryName = category => {
  const categoryNames = {
    'to-do': 'To Do',
    'in-progress': 'In Progress',
    done: 'Done',
  };
  return categoryNames[category] || category;
};

const calculationTasksByCategory = (currentDate, tasks) => {
  const filteredTasksDay = tasks
    ? tasks.filter(({ date }) => date === currentDate)
    : [];

  const categories = ['to-do', 'in-progress', 'done'];
  const numberOfTasksDayByCategory = categories.map(category =>
    filteredTasksByCategory(filteredTasksDay, category)
  );
  const numberOfTasksMonthByCategory = categories.map(category =>
    filteredTasksByCategory(tasks, category)
  );

  const percentageTasksDay = percentageOfTasks(numberOfTasksDayByCategory);
  const percentageTasksMonth = percentageOfTasks(numberOfTasksMonthByCategory);

  return categories.map((category, index) => ({
    name: getCategoryName(category),
    day: numberOfTasksDayByCategory[index],
    month: numberOfTasksMonthByCategory[index],
    percentageDay: percentageTasksDay[index],
    percentageMonth: percentageTasksMonth[index],
  }));
};

export default calculationTasksByCategory;
