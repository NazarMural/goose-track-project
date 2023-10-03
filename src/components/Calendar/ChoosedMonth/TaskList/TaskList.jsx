import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import moment from 'moment';

import { List, TaskItem, TaskLink } from './TaskList.styled';
import { fetchTasksOperation } from 'redux/tasks/operations';

const updateDate = date => {
  const [year, mon] = date.split('-');
  const month = moment(mon).format('MMMM');
  return `${month}-${year}`;
};

export const TaskList = ({ currentDate }) => {
  const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  const { currentMonth } = useParams();

  useEffect(() => {
    (async () => {
      const { payload } = await dispatch(fetchTasksOperation());
      const filteredTasks = payload
        ? payload.filter(({ date }) => updateDate(date) === currentMonth)
        : [];
      setTasks(filteredTasks);
    })();
  }, [currentMonth, dispatch]);

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
