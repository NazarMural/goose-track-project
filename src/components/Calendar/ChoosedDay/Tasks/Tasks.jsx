import React, { useRef, useState } from 'react';
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
import { TaskModal } from 'components/TaskModal/TaskModal';

const Tasks = ({
  type,
  tasks,
  setTasks,
  isShowPopUpReplace,
  setIsShowPopUpReplace,
}) => {
  const dispatch = useDispatch();
  

  const avatarURL = useSelector(selectUserAvatar);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [taskForForm, setTaskForForm] = useState({});
  const togglePopUpRef = useRef({});

  const toggleShowPopUpReplace = id => {
    if (isShowPopUpReplace === id) {
      setIsShowPopUpReplace(false);
      togglePopUpRef[id].blur();
    } else {
      setIsShowPopUpReplace(id);
    }
  };

  const onEdit = task => {
    setTaskForForm(task);
    setIsFormOpen(true);
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

  const closeForm = () => {
    setTaskForForm({});
    setIsFormOpen(false);
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
                <IconTaskButton onClick={() => onEdit(task)}>
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
                setTasks={setTasks}
                setIsShowPopUpReplace={setIsShowPopUpReplace}
                _id={_id}
              ></PopUpReplace>
            )}
            {isFormOpen && (
              <TaskModal
                isOpen={isFormOpen}
                onClose={closeForm}
                category={category}
                task={taskForForm}
              />
            )}
          </Task>
        );
      })}
    </ListTasks>
  );
};

export default Tasks;
