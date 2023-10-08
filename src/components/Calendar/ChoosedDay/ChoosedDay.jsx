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
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasksOperation } from 'redux/tasks/operations';
import { useParams } from 'react-router-dom';
import Head from './Head/Head';
import { TaskModal } from 'components/TaskModal/TaskModal';
import { selectIsUpdating } from 'redux/tasks/selectors';
import moment from 'moment';

const categories = [
  { id: 1, type: 'to-do' },
  { id: 2, type: 'in-progress' },
  { id: 3, type: 'done' },
];

const ChoosedDay = () => {
  const [tasks, setTasks] = useState([]);
  const { currentDay } = useParams();
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isShowPopUpReplace, setIsShowPopUpReplace] = useState(false);

  const isEditTask = useSelector(selectIsUpdating);

  useEffect(() => {
    (async () => {
      const currentMonth = moment(currentDay).format('YYYY-MM');

      const { payload } = await dispatch(fetchTasksOperation(currentMonth));

      const filteredTasks = payload
        ? payload
            .filter(({ date }) => date === currentDay)
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        : [];
      setTasks(filteredTasks);
    })();
  }, [currentDay, dispatch, isEditTask]);

  const onAdd = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <Head />
      <ContainerMain>
        {categories.map(({ id, type }) => (
          <ContainerSecond key={id}>
            <Title
              type={type}
              onAdd={onAdd}
              tasks={tasks.filter(({ category }) => category === type)}
            />
            <Tasks
              type={type}
              tasks={tasks}
              setTasks={setTasks}
              isShowPopUpReplace={isShowPopUpReplace}
              setIsShowPopUpReplace={setIsShowPopUpReplace}
            />
            <ContainerButtonAddTask>
              <ButtonAddTask onClick={onAdd}>
                <IconButtonAddTask>
                  <use xlinkHref={sprite + '#icon-plus'} />
                </IconButtonAddTask>
                <ButtonAddTaskText>Add task</ButtonAddTaskText>
              </ButtonAddTask>
            </ContainerButtonAddTask>
            {isFormOpen && (
              <TaskModal
                isOpen={isFormOpen}
                onClose={closeForm}
                category={type}
              />
            )}
          </ContainerSecond>
        ))}
      </ContainerMain>
    </>
  );
};

export default ChoosedDay;
