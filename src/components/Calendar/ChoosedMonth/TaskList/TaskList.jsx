import moment from 'moment';
import tasks from './tasks';
import { List, TaskItem, TaskLink } from './TaskList.styled';

export const TaskList = ({ date }) => {
  //   const filter = tasks.filter(task => task.date === date);
  //   const filter = tasks.filter(
  //     task => !moment(task.date).diff(moment(date), 'day')
  //   );
  //   console.log(filter);
  return (
    <List>
      {tasks
        .filter(task => !moment(task.date).diff(moment(date), 'day'))
        .map((task, idx) => (
          <TaskItem key={idx} bg={`var(--calend-${task.priority}-bg-color)`}>
            <TaskLink color={`var(--calend-${task.priority}-color)`}>
              {task.title}
            </TaskLink>
          </TaskItem>
        ))}
    </List>
  );
};
