import React, { useState } from 'react';
import {
  ContainerButtonsTask,
  ContainerIcons,
  ContainerListTasks,
  IconTask,
  ListTasks,
  Task,
  TaskButtonPriority,
  TaskImage,
  TaskTitle,
} from './Tasks.styled';
import PopUpReplace from '../PopUpReplace/PopUpReplace';
import { useDispatch } from 'react-redux';
import { deleteTaskOperation } from 'redux/tasks/operations';

import sprite from '../../../../assets/images/icons/icons.svg';

const Tasks = ({ type, tasks, setTasks }) => {
  const dispatch = useDispatch();
  const [isShowPopUpReplace, setIsShowPopUpReplace] = useState(false);

  const toggleShowPopUpReplace = id => {
    isShowPopUpReplace === id
      ? setIsShowPopUpReplace(false)
      : setIsShowPopUpReplace(id);
  };
  const onEdit = () => {
    console.log('onEdit');
  };
  const onDelete = taskId => {
    dispatch(deleteTaskOperation(taskId));
    const filteredTasks = tasks
      ? tasks.filter(({ _id }) => _id !== taskId)
      : [];
    setTasks(filteredTasks);
  };
  return (
    <ContainerListTasks>
      <ListTasks>
        {tasks.map(
          ({ _id, title, start, end, priority, date, category, owner }) => {
            if (type !== category) {
              return '';
            }
            return (
              <Task key={_id}>
                <TaskTitle>{title}</TaskTitle>
                <ContainerButtonsTask>
                  <TaskImage
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="#"
                  />
                  <TaskButtonPriority priority={priority}>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </TaskButtonPriority>
                  <ContainerIcons>
                    <IconTask onClick={() => toggleShowPopUpReplace(_id)}>
                      <use
                        xlinkHref={sprite + '#icon-arrow-circle-broken-right'}
                      />
                    </IconTask>
                    <IconTask onClick={onEdit}>
                      <use xlinkHref={sprite + '#icon-pencil'} />
                    </IconTask>
                    <IconTask onClick={() => onDelete(_id)}>
                      <use xlinkHref={sprite + '#icon-trash'} />
                    </IconTask>
                    {isShowPopUpReplace === _id && (
                      <PopUpReplace
                        type={type}
                        tasks={tasks}
                        setTasks={setTasks}
                        setIsShowPopUpReplace={setIsShowPopUpReplace}
                        _id={_id}
                      ></PopUpReplace>
                    )}
                  </ContainerIcons>
                </ContainerButtonsTask>
              </Task>
            );
          }
        )}
      </ListTasks>
    </ContainerListTasks>
  );
};

export default Tasks;
