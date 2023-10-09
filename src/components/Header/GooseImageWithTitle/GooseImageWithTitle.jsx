import gooseHeader1x from 'assets/images/gooseHeader1x.png';
import gooseHeader2x from 'assets/images/gooseHeader2x.png';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectTasks } from 'redux/tasks/selectors';
import {
  GooseImageEl,
  GooseText,
  PageTitle,
  Thumb,
} from './GooseImageWithTitle.styled';

export const GooseImageWithTitle = () => {
  const location = useLocation();
  const tasks = useSelector(selectTasks);
  const selectedDay = location.pathname.split('/');
  const defineCurentPage = () => {
    if (location.pathname.includes('account')) return 'User profile';
    if (location.pathname.includes('calendar')) return 'Calendar';
    if (location.pathname.includes('statistics')) return 'Statistics';
  };
  const currentPageTitle = defineCurentPage();
  const tasksInProgress = tasks.filter(
    item => item.date === selectedDay[3]
  ).length;

  return (
    <>
      {tasksInProgress ? (
        <>
          <GooseImageEl
            src={gooseHeader1x}
            srcSet={`${gooseHeader1x} 1x, ${gooseHeader2x} 2x`}
            alt="The goose invites you to organize your life and manage your team "
          />
          <Thumb>
            <PageTitle>{currentPageTitle}</PageTitle>
            <GooseText>
              <span>Let go</span> of the past and focus on the present!
            </GooseText>
          </Thumb>
        </>
      ) : (
        <PageTitle>{currentPageTitle}</PageTitle>
      )}
    </>
  );
};
