import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import { FeedbackBtn } from './FeedbackBtn.jsx/FeedbackBtn';
import { UserInfo } from './UserInfo/UserInfo';
import { HeaderSection, PageTitle } from './Header.styled';
import { useLocation } from 'react-router-dom';
import ReviewForm from './AddFeedbackModal/ReviewForm/ReviewForm';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';
import { GooseImageWithTitle } from './GooseImageWithTitle/GooseImageWithTitle';

export const Header = ({ addSideBar, showSideBar }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  const location = useLocation();
  const tasks = useSelector(selectTasks);
  const selectedDay = location.pathname.split('/');
  const tasksInProgress = tasks.filter(item => item.date === selectedDay[3]);
  console.log(tasks);
  console.log(location);
  console.log(selectedDay);
  console.log(tasksInProgress);

  const defineCurentPage = () => {
    if (location.pathname.includes('account')) return 'User profile';
    if (location.pathname.includes('calendar')) return 'Calendar';
    if (location.pathname.includes('statistics')) return 'Statistics';
  };
  const currentPageTitle = defineCurentPage();

  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <HeaderSection showSideBar={showSideBar}>
      {isDesktop ? (
        <>
          <GooseImageWithTitle currentPageTitle={currentPageTitle} />
          <PageTitle>{currentPageTitle}</PageTitle>
          {/* <p>Let go of the past and focus on the present!</p> */}
        </>
      ) : (
        <BurgerBtn addSideBar={addSideBar} />
      )}
      <FeedbackBtn openForm={openForm} />
      <UserInfo />
      {isFormOpen && <ReviewForm isOpen={isFormOpen} onClose={closeForm} />}
    </HeaderSection>
  );
};
