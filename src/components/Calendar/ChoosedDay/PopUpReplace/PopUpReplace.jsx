import React, { useEffect } from 'react';

import sprite from '../../../../assets/images/icons/icons.svg';
import {
  ContainerReplaceTask,
  ReplaceTaskContainerText,
  ReplaceTaskText,
} from './PopUpReplace.styled';
import { useDispatch } from 'react-redux';
import { updateTaskOperation } from 'redux/tasks/operations';
import { IconTask } from '../Tasks/Tasks.styled';
import { Notify } from 'notiflix';

const PopUpReplace = ({
  type,
  tasks,
  setTasks,
  setIsShowPopUpReplace,
  _id,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const onClickClose = ({ target }) => {
      if (target.id !== 'togglePopUp') {
        setIsShowPopUpReplace(false);
      }
    };
    const onEscClose = ({ code }) => {
      if (code === 'Escape') {
        setIsShowPopUpReplace(false);
      }
    };

    document.addEventListener('click', onClickClose);
    document.addEventListener('keydown', onEscClose);

    return () => {
      document.removeEventListener('click', onClickClose);
      document.removeEventListener('keydown', onEscClose);
    };
  }, [setIsShowPopUpReplace]);

  const viewCategories = type => {
    let arrCategories = [];
    switch (type) {
      case 'to-do':
        arrCategories = [
          {
            id: 1,
            typeCategory: 'In progress',
            typeForOnClick: 'in-progress',
          },
          { id: 2, typeCategory: 'Done', typeForOnClick: 'done' },
        ];
        break;

      case 'in-progress':
        arrCategories = [
          { id: 1, typeCategory: 'To Do', typeForOnClick: 'to-do' },
          { id: 2, typeCategory: 'Done', typeForOnClick: 'done' },
        ];
        break;
      case 'done':
        arrCategories = [
          { id: 1, typeCategory: 'To Do', typeForOnClick: 'to-do' },
          {
            id: 2,
            typeCategory: 'In progress',
            typeForOnClick: 'in-progress',
          },
        ];
        break;

      default:
        break;
    }
    return arrCategories;
  };

  const onReplace = async (id, typeCategory) => {
    const response = await dispatch(
      updateTaskOperation({
        taskId: id,
        updateTaskData: { category: typeCategory },
      })
    );

    if (response.payload.status) {
      Notify.failure('Task don`t replace. Try again');
      return;
    }

    const filteredTasks = tasks
      ? tasks.map(task => {
          if (task._id === id) {
            return { ...task, category: typeCategory };
          }
          return task;
        })
      : [];

    setTasks(filteredTasks);
  };
  return (
    <ContainerReplaceTask id="popUpReplace">
      {viewCategories(type).map(({ id, typeCategory, typeForOnClick }) => (
        <ReplaceTaskContainerText
          key={id}
          onClick={() => onReplace(_id, typeForOnClick)}
        >
          <ReplaceTaskText>{typeCategory}</ReplaceTaskText>
          <IconTask>
            <use xlinkHref={sprite + '#icon-arrow-circle-broken-right'} />
          </IconTask>
        </ReplaceTaskContainerText>
      ))}
    </ContainerReplaceTask>
  );
};

export default PopUpReplace;
