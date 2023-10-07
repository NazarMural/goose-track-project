import {
  ButtonAddTask,
  ButtonAddTaskText,
  ContainerButtonAddTask,
  ContainerMain,
  ContainerSecond,
  IconButtonAddTask,
} from './ChoosedDay.styled';

import sprite from '../../../assets/images/icons/icons.svg';
import Title from './Title/Title';
import Tasks from './Tasks/Tasks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasksOperation } from 'redux/tasks/operations';
import { useParams } from 'react-router-dom';
import Head from './Head/Head';

const categories = [
  { id: 1, type: 'to-do' },
  { id: 2, type: 'in-progress' },
  { id: 3, type: 'done' },
];

const ChoosedDay = () => {
  const [tasks, setTasks] = useState([]);
  const { currentDay } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const formatedDate = currentDay.split('-').slice(0, 2).join('-');

      const { payload } = await dispatch(fetchTasksOperation(formatedDate));

      const filteredTasks = payload
        ? payload.filter(({ date }) => date === currentDay)
        : [];
      setTasks(filteredTasks);
    })();
    return () => {
      setTasks([]);
    };
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

  const onAdd = category => {
    console.log('onAdd', category);
  };

  return (
    <>
      <Head />
      <ContainerMain>
        {categories.map(({ id, type }) => (
          <ContainerSecond key={id}>
            <Title type={type} onAdd={onAdd} />
            <Tasks type={type} tasks={tasks} setTasks={setTasks} />
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
    </>
  );
};

export default ChoosedDay;
