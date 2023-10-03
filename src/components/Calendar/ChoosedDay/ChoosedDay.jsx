import React, { useEffect, useState } from 'react';
import {
  ButtonAddTask,
  ButtonAddTaskText,
  ContainerButtonAddTask,
  ContainerButtonsTask,
  ContainerIcons,
  ContainerListTasks,
  ContainerMain,
  ContainerReplaceTask,
  ContainerSecond,
  ContainerTitle,
  IconAddTask,
  IconButtonAddTask,
  IconTask,
  ListTasks,
  ReplaceTaskContainerText,
  ReplaceTaskText,
  Task,
  TaskButtonPriority,
  TaskImage,
  TaskTitle,
  Title,
} from './ChoosedDay.styled';

import sprite from '../../../assets/images/icons/icons.svg';

import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  deleteTaskOperation,
  fetchTasksOperation,
  updateTaskOperation,
} from 'redux/tasks/operations';
import { useParams } from 'react-router-dom';

axios.defaults.headers.common.Authorization = `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MWE5MmU2ZGQxNmQyNjY2MWZkN2QyZCIsImlhdCI6MTY5NjMxNTM3NCwiZXhwIjoxNjk2Mzc2NTc0fQ.DeLcp-lYKAMf2fWpg2YL7MotfLQ_xF60t5JzX5gIL5U'}`;

const categories = [
  { id: 1, type: 'to-do' },
  { id: 2, type: 'in-progress' },
  { id: 3, type: 'done' },
];

const ChoosedDay = () => {
  const [tasks, setTasks] = useState([]);
  const [isShowPopUpReplace, setIsShowPopUpReplace] = useState(false);
  const dispatch = useDispatch();

  const { currentDay } = useParams();

  useEffect(() => {
    (async () => {
      const { payload } = await dispatch(fetchTasksOperation());
      const filteredTasks = payload
        ? payload.filter(({ date }) => date === currentDay)
        : [];
      setTasks(filteredTasks);
    })();
  }, [currentDay, dispatch]);

  // useEffect(() => {
  //   const onClickBody = ({ target }) => {
  //     console.dir(target);
  //     if (target.tagName !== 'use') {
  //       setIsShowPopUpReplace(false);
  //       return;
  //     }
  //   };
  //   const body = document.querySelector('body');

  //   if (isShowPopUpReplace) {
  //     body.addEventListener('click', onClickBody);
  //   } else {
  //     body.removeEventListener('click', onClickBody);
  //   }
  // }, [isShowPopUpReplace]);

  const onDelete = taskId => {
    dispatch(deleteTaskOperation(taskId));
    const filteredTasks = tasks
      ? tasks.filter(({ _id }) => _id !== taskId)
      : [];
    setTasks(filteredTasks);
  };

  const onEdit = () => {
    console.log('onEdit');
  };

  const onAdd = category => {
    console.log('onAdd');
  };

  const toggleShowPopUpReplace = id => {
    isShowPopUpReplace === id
      ? setIsShowPopUpReplace(false)
      : setIsShowPopUpReplace(id);
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

  const viewCategories = type => {
    let arrCategories = [];
    switch (type) {
      case 'to-do':
        arrCategories = [
          { id: 1, typeCategory: 'In progress', typeForOnClick: 'in-progress' },
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
          { id: 2, typeCategory: 'In progress', typeForOnClick: 'in-progress' },
        ];
        break;

      default:
        break;
    }
    return arrCategories;
  };

  return (
    <ContainerMain>
      {categories.map(({ id, type }) => (
        <ContainerSecond key={id}>
          <ContainerTitle>
            <Title>
              {(() => {
                switch (type) {
                  case 'to-do':
                    return 'To do';

                  case 'in-progress':
                    return 'In progress';
                  case 'done':
                    return 'Done';

                  default:
                    return;
                }
              })()}
            </Title>
            <IconAddTask onClick={onAdd}>
              <use xlinkHref={sprite + '#icon-icon-plus'} />
            </IconAddTask>
          </ContainerTitle>
          <ContainerListTasks>
            <ListTasks>
              {tasks.map(
                ({
                  _id,
                  title,
                  start,
                  end,
                  priority,
                  date,
                  category,
                  owner,
                }) => {
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
                              xlinkHref={
                                sprite + '#icon-arrow-circle-broken-right'
                              }
                            />
                          </IconTask>
                          <IconTask onClick={onEdit}>
                            <use xlinkHref={sprite + '#icon-pencil'} />
                          </IconTask>
                          <IconTask onClick={() => onDelete(_id)}>
                            <use xlinkHref={sprite + '#icon-trash'} />
                          </IconTask>
                          {isShowPopUpReplace === _id && (
                            <ContainerReplaceTask>
                              {viewCategories(type).map(
                                ({ id, typeCategory, typeForOnClick }) => (
                                  <ReplaceTaskContainerText
                                    key={id}
                                    onClick={() =>
                                      onReplace(_id, typeForOnClick)
                                    }
                                  >
                                    <ReplaceTaskText>
                                      {typeCategory}
                                    </ReplaceTaskText>
                                    <IconTask>
                                      <use
                                        xlinkHref={
                                          sprite +
                                          '#icon-arrow-circle-broken-right'
                                        }
                                      />
                                    </IconTask>
                                  </ReplaceTaskContainerText>
                                )
                              )}
                            </ContainerReplaceTask>
                          )}
                        </ContainerIcons>
                      </ContainerButtonsTask>
                    </Task>
                  );
                }
              )}
            </ListTasks>
          </ContainerListTasks>
          <ContainerButtonAddTask>
            <ButtonAddTask onClick={onAdd}>
              <IconButtonAddTask>
                <use xlinkHref={sprite + '#icon-plus'} />
              </IconButtonAddTask>
              <ButtonAddTaskText>Add task</ButtonAddTaskText>
            </ButtonAddTask>
          </ContainerButtonAddTask>
        </ContainerSecond>
      ))}
    </ContainerMain>
  );
};

export default ChoosedDay;
