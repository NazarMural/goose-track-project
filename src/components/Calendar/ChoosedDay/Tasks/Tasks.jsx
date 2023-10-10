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
import { Confirm, Notify } from 'notiflix';

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

  const onDelete = taskId => {
    Confirm.show(
      'Confirm',
      'Are you sure you want to delete this?',
      'Delete',
      'Cancel',
      async () => {
        const response = await dispatch(deleteTaskOperation(taskId));
        if (response.payload.status) {
          Notify.failure('Task don`t delete. Try again');
          return;
        }
        Notify.success('Task deleted successfully', {
          success: { background: 'var(--accent-color)' },
        });
      },
      () => {},
      {
        messageColor: 'var(--primary-text-color);',
        backgroundColor: 'var(--primary-bg-color)',
        okButtonBackground: 'var(--accent-color)',
        titleColor: 'var(--accent-color)',
      }
    );
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
  isShowPopUpReplace: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onEdit: PropTypes.func.isRequired,
  setIsShowPopUpReplace: PropTypes.func.isRequired,
};

export default Tasks;
