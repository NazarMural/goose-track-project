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
import { selectTasks } from 'redux/tasks/selectors';
import moment from 'moment';
import { selectTheme } from 'redux/theme/selectors';

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
  const [isDisabledAddTask, setIsDisabledAddTask] = useState(false);
  const [taskForForm, setTaskForForm] = useState({});
  const [currentCategory, setCurrentCategory] = useState('');
  const currentTheme = useSelector(selectTheme);
  const reduxTasks = useSelector(selectTasks);

  useEffect(() => {
    (async () => {
      const currentMonth = moment(currentDay).format('YYYY-MM');

      await dispatch(fetchTasksOperation(currentMonth));
    })();
  }, [currentDay, dispatch]);

  useEffect(() => {
    const filteredTasks = reduxTasks
      ? reduxTasks
          .filter(({ date }) => date === currentDay)
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      : [];
    setTasks(filteredTasks);
  }, [currentDay, reduxTasks]);

  useEffect(() => {
    const nowDay = new Date(moment().format('YYYY-MM-DD'));
    const paramsDay = new Date(currentDay);
    if (nowDay === paramsDay) {
      setIsDisabledAddTask(false);
      return;
    } else if (nowDay > paramsDay) {
      setIsDisabledAddTask(true);
      return;
    }
    setIsDisabledAddTask(false);
  }, [currentDay]);

  const onAdd = category => {
    setIsFormOpen(true);
    setCurrentCategory(category);
  };

  const onEdit = (task, category) => {
    setTaskForForm(task);
    setIsFormOpen(true);
    setCurrentCategory(category);
  };

  const closeForm = () => {
    setCurrentCategory('');
    setTaskForForm({});
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
              isDisabledAddTask={isDisabledAddTask}
              tasks={tasks.filter(({ category }) => category === type)}
            />
            <Tasks
              type={type}
              tasks={tasks}
              onEdit={onEdit}
              isShowPopUpReplace={isShowPopUpReplace}
              setIsShowPopUpReplace={setIsShowPopUpReplace}
            />
            <ContainerButtonAddTask>
              <ButtonAddTask
                onClick={() => onAdd(type)}
                disabled={isDisabledAddTask}
                currentTheme={currentTheme}
              >
                <IconButtonAddTask>
                  <use xlinkHref={sprite + '#icon-plus'} />
                </IconButtonAddTask>
                <ButtonAddTaskText>Add task</ButtonAddTaskText>
              </ButtonAddTask>
            </ContainerButtonAddTask>
          </ContainerSecond>
        ))}
        {isFormOpen && (
          <TaskModal
            isOpen={isFormOpen}
            onClose={closeForm}
            category={currentCategory}
            task={{ ...taskForForm, date: currentDay }}
          />
        )}
      </ContainerMain>
    </>
  );
};

export default ChoosedDay;
