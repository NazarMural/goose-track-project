import moment from 'moment';

import { List, TaskItem, TaskLink } from './TaskList.styled';

export const TaskList = ({ tasks, currentDate }) => {
  return (
    <List>
      {tasks
        .filter(task => !moment(task.date).diff(moment(currentDate), 'day'))
        .map((task, idx) => (
          <TaskItem
            key={idx}
            bg={`var(--calend-${task.priority}-bg-color)`}
            color={`var(--calend-${task.priority}-color)`}
          >
            <TaskLink>{task.title}</TaskLink>
          </TaskItem>
        ))}
    </List>
  );
};
