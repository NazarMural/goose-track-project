import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ContainerButtonsTask,
  ContainerIcons,
  IconTask,
  IconTaskButton,
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

const Tasks = ({
  type,
  tasks,
  onEdit,
  isShowPopUpReplace,
  setIsShowPopUpReplace,
}) => {
  const dispatch = useDispatch();

  const avatarURL = useSelector(selectUserAvatar);

  const togglePopUpRef = useRef({});

  const toggleShowPopUpReplace = id => {
    if (isShowPopUpReplace === id) {
      setIsShowPopUpReplace(false);
      togglePopUpRef[id].blur();
    } else {
      setIsShowPopUpReplace(id);
    }
  };

  const onDelete = async taskId => {
    const response = await dispatch(deleteTaskOperation(taskId));
    if (response.payload.status) {
      Notify.failure('Task don`t delete. Try again');
      return;
    }
    Notify.success('Task deleted successfully');
  };

  return (
    <ListTasks tasks={tasks.filter(({ category }) => category === type)}>
      {tasks.map(task => {
        const { _id, title, priority, category } = task;
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
                <IconTaskButton
                  id="togglePopUp"
                  ref={ref => (togglePopUpRef[_id] = ref)}
                  onClick={() => toggleShowPopUpReplace(_id)}
                >
                  <IconTask id="togglePopUp">
                    <use
                      id="togglePopUp"
                      xlinkHref={sprite + '#icon-arrow-circle-broken-right'}
                    />
                  </IconTask>
                </IconTaskButton>
                <IconTaskButton onClick={() => onEdit(task, category)}>
                  <IconTask>
                    <use xlinkHref={sprite + '#icon-pencil'} />
                  </IconTask>
                </IconTaskButton>
                <IconTaskButton onClick={() => onDelete(_id)}>
                  <IconTask>
                    <use xlinkHref={sprite + '#icon-trash'} />
                  </IconTask>
                </IconTaskButton>
              </ContainerIcons>
            </ContainerButtonsTask>
            {isShowPopUpReplace === _id && (
              <PopUpReplace
                type={type}
                tasks={tasks}
                setIsShowPopUpReplace={setIsShowPopUpReplace}
                _id={_id}
              ></PopUpReplace>
            )}
          </Task>
        );
      })}
    </ListTasks>
  );
};

Tasks.propTypes = {
  type: PropTypes.oneOf(['to-do', 'in-progress', 'done']),
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  isShowPopUpReplace: PropTypes.bool.isRequired,
  setIsShowPopUpReplace: PropTypes.func.isRequired,
};

export default Tasks;
