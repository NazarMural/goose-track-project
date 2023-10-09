import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import sprite from '../../../../assets/images/icons/icons.svg';
import {
  ContainerReplaceTask,
  ReplaceTaskContainerText,
  ReplaceTaskText,
} from './PopUpReplace.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskOperation } from 'redux/tasks/operations';
import { IconTask } from '../Tasks/Tasks.styled';
import { Notify } from 'notiflix';
import { selectTheme } from 'redux/theme/selectors';

const PopUpReplace = ({
  type,
  tasks,
  setTasks,
  setIsShowPopUpReplace,
  _id,
}) => {
  const dispatch = useDispatch();

  const currentTheme = useSelector(selectTheme);

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
    <ContainerReplaceTask id="popUpReplace" currentTheme={currentTheme}>
      {viewCategories(type).map(({ id, typeCategory, typeForOnClick }) => (
        <ReplaceTaskContainerText
          currentTheme={currentTheme}
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

PopUpReplace.propTypes = {
  type: PropTypes.oneOf(['to-do', 'in-progress', 'done']),
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  setIsShowPopUpReplace: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
};

export default PopUpReplace;
