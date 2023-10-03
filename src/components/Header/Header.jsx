import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import { FeedbackBtn } from './FeedbackBtn.jsx/FeedbackBtn';
import { UserInfo } from './UserInfo/UserInfo';
import { HeaderSection } from './Header.styled';
import ReviewForm from '../../components/Modal/ReviewForm/ReviewForm';

export const Header = ({ addSideBar, showSideBar }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });

   const [isFormOpen, setIsFormOpen] = useState(false);

   const openForm = () => {
     setIsFormOpen(true);
   };

   const closeForm = () => {
     setIsFormOpen(false);
   };

  return (
    <HeaderSection showSideBar={showSideBar}>
      {!isDesktop && <BurgerBtn addSideBar={addSideBar} />}
      <FeedbackBtn openForm={openForm} />
      <UserInfo />
      {isFormOpen && <ReviewForm isOpen={isFormOpen} onClose={closeForm} />}
    </HeaderSection>
  );
};
