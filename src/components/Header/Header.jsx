import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchOwnReviewOperation } from 'redux/reviews/operations';
import { useMediaQuery } from 'react-responsive';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import { FeedbackBtn } from './FeedbackBtn.jsx/FeedbackBtn';
import { UserInfo } from './UserInfo/UserInfo';
import { HeaderSection } from './Header.styled';
import ReviewForm from './AddFeedbackModal/ReviewForm/ReviewForm';
import { GooseImageWithTitle } from './GooseImageWithTitle/GooseImageWithTitle';
import { useDispatch } from 'react-redux';

export const Header = ({ addSideBar, showSideBar }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  const dispatch = useDispatch();
  const [review, setReview] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  useEffect(() => {
    isFormOpen &&
      (async () => {
        const { payload } = await dispatch(fetchOwnReviewOperation());
        setReview(
          payload?.review && payload?.review?.length > 0
            ? payload.review[0]
            : undefined
        );
      })();
  }, [isFormOpen, dispatch]);

  return (
    <HeaderSection showSideBar={showSideBar}>
      {isDesktop ? (
        <GooseImageWithTitle />
      ) : (
        <BurgerBtn addSideBar={addSideBar} />
      )}
      <FeedbackBtn openForm={openForm} />
      <UserInfo />
      {isFormOpen && (
        <ReviewForm isOpen={isFormOpen} onClose={closeForm} review={review} />
      )}
    </HeaderSection>
  );
};

Header.propTypes = {
  addSideBar: PropTypes.func,
  showSideBar: PropTypes.bool,
};
