import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { Notify } from 'notiflix';
import Modal from '../../../Modal/Modal';
import {
  FormContainer,
  LabelText,
  CommentBox,
  CommentText,
  SaveButton,
  CancelButton,
  ButtonsBox,
} from './ReviewForm.styled';
import Rating from '../Rating/Rating';
import { addReviewOperation } from '../../../../redux/reviews/operations';

const ReviewForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    rating: '',
    comment: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = newRating => {
    setFormData({
      ...formData,
      rating: newRating,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.rating === '') {
      Notify.warning('Please select a rating before submitting.');

      return;
    }
    console.log(formData);
    dispatch(addReviewOperation(formData));
    onClose();
  };

  const handleCancel = () => {
    setFormData({
      rating: '',
      comment: '',
    });
    onClose();
  };

  const closeButtonPosition = { top: '16px', right: '16px' };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeButtonPosition={closeButtonPosition}
    >
      <FormContainer onSubmit={handleSubmit}>
        <div>
          <LabelText>Rating</LabelText>
          <Rating onRatingChange={handleRatingChange} required></Rating>
        </div>

        <CommentBox>
          <LabelText htmlFor="comment">Review</LabelText>
          <CommentText
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            maxLength={300}
            placeholder="Enter Text"
          />
        </CommentBox>
        <ButtonsBox>
          <SaveButton type="submit">Save</SaveButton>
          <CancelButton type="button" onClick={handleCancel}>
            Cancel
          </CancelButton>
        </ButtonsBox>
      </FormContainer>
    </Modal>
  );
};

export default ReviewForm;
