import React from 'react';

import sprite from '../../../../assets/images/icons/icons.svg';
import {
  ContainerReplaceTask,
  ReplaceTaskContainerText,
  ReplaceTaskText,
} from './PopUpReplace.styled';
import { useDispatch } from 'react-redux';
import { updateTaskOperation } from 'redux/tasks/operations';
import { IconTask } from '../Tasks/Tasks.styled';

const PopUpReplace = ({
  type,
  tasks,
  setTasks,
  setIsShowPopUpReplace,
  _id,
}) => {
  const dispatch = useDispatch();

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
    await dispatch(
      updateTaskOperation({
        taskId: id,
        updateTaskData: { category: typeCategory },
      })
    );

    const filteredTasks = tasks
      ? tasks.map(task => {
          if (task._id === id) {
            return { ...task, category: typeCategory };
          }
          return task;
        })
      : [];

    setTasks(filteredTasks);

    setIsShowPopUpReplace(false);
  };
  return (
    <ContainerReplaceTask>
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
