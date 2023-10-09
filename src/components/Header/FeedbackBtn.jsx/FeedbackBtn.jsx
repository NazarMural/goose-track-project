import PropTypes from 'prop-types';
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

FeedbackBtn.propTypes = {
  openForm: PropTypes.func,
};
