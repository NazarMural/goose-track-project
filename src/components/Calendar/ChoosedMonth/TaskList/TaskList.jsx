import { useState } from 'react';
import moment from 'moment';

import { List, TaskItem, TaskLink } from './TaskList.styled';
// import { useNavigate } from 'react-router';
import { TaskModal } from 'components/TaskModal/TaskModal';

export const TaskList = ({ tasks, currentDate }) => {
  // const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [taskForForm, setTaskForForm] = useState({});

  const handleChangeTask = task => {
    setTaskForForm(task);
    setIsFormOpen(true);
    // navigate(`/calendar/day/${day}`);
  };

  const closeForm = () => {
    setTaskForForm({});
    setIsFormOpen(false);
  };

  return (
    <List>
      {tasks
        .filter(task => !moment(task.date).diff(moment(currentDate), 'day'))
        .map((task, idx) => (
          <TaskItem
            key={idx + 1}
            bg={`var(--calend-${task.priority}-bg-color)`}
            color={`var(--calend-${task.priority}-color)`}
          >
            <div onClick={() => handleChangeTask(task)}>
              <TaskLink>{task.title}</TaskLink>
            </div>
            {isFormOpen && (
              <TaskModal
                isOpen={isFormOpen}
                onClose={closeForm}
                category={task.category}
                task={taskForForm}
              />
            )}
          </TaskItem>
        ))}
    </List>
  );
};
