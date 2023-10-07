import React, { useEffect, useState } from 'react';
import {
  ContainerButtonsTask,
  ContainerIcons,
  ContainerListTasks,
  IconTask,
  ListTasks,
  Task,
  TaskButtonPriority,
  TaskImage,
  TaskImagePlug,
  TaskTitle,
} from './Tasks.styled';
import PopUpReplace from '../PopUpReplace/PopUpReplace';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskOperation } from 'redux/tasks/operations';

import sprite from '../../../../assets/images/icons/icons.svg';
import { selectUserAvatar } from 'redux/auth/selectors';
import { Notify } from 'notiflix';

const Tasks = ({ type, tasks, setTasks }) => {
  const dispatch = useDispatch();
  const [isShowPopUpReplace, setIsShowPopUpReplace] = useState(false);
  const avatarURL = useSelector(selectUserAvatar);

  const toggleShowPopUpReplace = (id, e) => {
    const x = e.clientX;
    const y = e.clientY;
    // console.log('x', x);
    // console.log('y', y);
    isShowPopUpReplace === id
      ? setIsShowPopUpReplace(false)
      : setIsShowPopUpReplace(id);
  };

  const onEdit = () => {
    console.log('onEdit');
  };
  const onDelete = async taskId => {
    const response = await dispatch(deleteTaskOperation(taskId));
    if (response.payload.status) {
      Notify.failure('Task don`t delete. Try again');
      return;
    }
    const filteredTasks = tasks
      ? tasks.filter(({ _id }) => _id !== taskId)
      : [];
    setTasks(filteredTasks);
    Notify.success('Task deleted successfully');
  };
  return (
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
                {avatarURL ? (
                  <TaskImage src={avatarURL} alt="User avatar" />
                ) : (
                  <TaskImagePlug>
                    <use href={`${sprite}#icon-ph_user`}></use>
                  </TaskImagePlug>
                )}
                <TaskButtonPriority priority={priority}>
                  {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </TaskButtonPriority>
                <ContainerIcons>
                  <IconTask
                    id="togglePopUp"
                    onClick={e => toggleShowPopUpReplace(_id, e)}
                  >
                    <use
                      id="togglePopUp"
                      xlinkHref={sprite + '#icon-arrow-circle-broken-right'}
                    />
                  </IconTask>
                  <IconTask onClick={onEdit}>
                    <use xlinkHref={sprite + '#icon-pencil'} />
                  </IconTask>
                  <IconTask onClick={() => onDelete(_id)}>
                    <use xlinkHref={sprite + '#icon-trash'} />
                  </IconTask>
                </ContainerIcons>
              </ContainerButtonsTask>
              {isShowPopUpReplace === _id && (
                <PopUpReplace
                  type={type}
                  tasks={tasks}
                  setTasks={setTasks}
                  setIsShowPopUpReplace={setIsShowPopUpReplace}
                  _id={_id}
                ></PopUpReplace>
              )}
            </Task>
          );
        }
      )}
    </ListTasks>
  );
};

export default Tasks;
