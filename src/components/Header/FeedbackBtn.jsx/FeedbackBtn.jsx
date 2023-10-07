import React from 'react';
import { FeedbackButton } from './FeedbackBtn.styled';

export const FeedbackBtn = ({ openForm }) => {
  const handleButtonClick = () => {
    openForm();
  };

  return (
    <FeedbackButton type="button" onClick={handleButtonClick}>
      Feedback
    </FeedbackButton>
  );
};
