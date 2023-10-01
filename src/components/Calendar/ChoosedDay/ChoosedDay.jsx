import React, { useEffect, useState } from 'react';
import {
  ButtonAddTask,
  ButtonAddTaskText,
  ContainerButtonAddTask,
  ContainerButtonsTask,
  ContainerIcons,
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

axios.defaults.baseURL = 'https://goose-track-project-backend.onrender.com/api';
axios.defaults.headers.common.Authorization = `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTk1NDI2MDQzNDI2MWYxYzQ5NDRkNCIsImlhdCI6MTY5NjE1ODc1OSwiZXhwIjoxNjk2MjE5OTU5fQ.vstE6qQZtaBpp0zc1hmsCUtgdfSMTVmnfEcYuwoleKw'}`;

const categories = [
  { id: 1, type: 'to-do' },
  { id: 2, type: 'in-progress' },
  { id: 3, type: 'done' },
];

const ChoosedDay = () => {
  const [data, setData] = useState([]);
  const [isShowPopUpReplace, setIsShowPopUpReplace] = useState(false);

  useEffect(() => {
    const test = async () => {
      const { data } = await axios.get('/tasks');
      setData(data);
    };

    test();
  }, []);

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

  const onDelete = () => {
    console.log('onDelete');
  };

  const onEdit = () => {
    console.log('onEdit');
  };

  const onAdd = () => {
    console.log('onAdd');
  };
  const toggleShowPopUpReplace = id => {
    isShowPopUpReplace === id
      ? setIsShowPopUpReplace(false)
      : setIsShowPopUpReplace(id);
  };

  const onReplace = id => {
    console.log('onReplace');
    setIsShowPopUpReplace(false);
  };

  const viewCategories = type => {
    let arrCategories = [];
    switch (type) {
      case 'to-do':
        arrCategories = [
          { id: 1, typeCategory: 'In progress' },
          { id: 2, typeCategory: 'Done' },
        ];
        break;

      case 'in-progress':
        arrCategories = [
          { id: 1, typeCategory: 'To Do' },
          { id: 2, typeCategory: 'Done' },
        ];
        break;
      case 'done':
        arrCategories = [
          { id: 1, typeCategory: 'To Do' },
          { id: 2, typeCategory: 'In progress' },
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
          <ListTasks>
            {data.map(
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
                            xlinkHref={
                              sprite + '#icon-arrow-circle-broken-right'
                            }
                          />
                        </IconTask>
                        <IconTask onClick={onEdit}>
                          <use xlinkHref={sprite + '#icon-pencil'} />
                        </IconTask>
                        <IconTask onClick={onDelete}>
                          <use xlinkHref={sprite + '#icon-trash'} />
                        </IconTask>
                        {isShowPopUpReplace === _id && (
                          <ContainerReplaceTask>
                            {viewCategories(type).map(
                              ({ id, typeCategory }) => (
                                <ReplaceTaskContainerText
                                  key={id}
                                  onClick={() => onReplace(_id)}
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
