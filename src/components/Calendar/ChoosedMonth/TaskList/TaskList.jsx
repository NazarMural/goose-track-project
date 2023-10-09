import { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { List, TaskItem, TaskLink } from './TaskList.styled';
import { TaskModal } from 'components/TaskModal/TaskModal';

export const TaskList = ({ tasks, currentDate }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [taskForForm, setTaskForForm] = useState({});

  const handleChangeTask = task => {
    setTaskForForm(task);
    setIsFormOpen(true);
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
            <div onClick={() => handleChangeTask(task)} id="task-link">
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

TaskList.propTypes = {
  tasks: PropTypes.array,
  currentDate: PropTypes.object.isRequired,
};

