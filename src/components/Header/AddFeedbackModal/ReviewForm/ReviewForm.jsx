import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import Modal from '../../../Modal/Modal';
import {
  FormContainer,
  LabelText,
  CommentBox,
  CommentText,
  SaveButton,
  CancelButton,
  EditButton,
  DeleteButton,
  ButtonsBox,
  IconContainer,
} from './ReviewForm.styled';
import Rating from '../Rating/Rating';
import {
  addReviewOperation,
  updateReviewOperation,
  deleteReviewOperation,
} from '../../../../redux/reviews/operations';

import { selectUser } from '../../../../redux/auth/selectors';

const ReviewForm = ({ isOpen, onClose, review }) => {
  const [formData, setFormData] = useState({
    rating: '',
    comment: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isEditingButtonsVisible, setIsEditingButtonsVisible] = useState(false);

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (review) {
      setFormData({
        rating: review.rating,
        comment: review.comment,
      });
      setIsEditing(false);
    }
  }, [review]);

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

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.rating === '') {
      Notify.warning('Please select a rating before submitting.');
      return;
    }

    if (review) {
      dispatch(
        updateReviewOperation({
          ...review,
          rating: formData.rating,
          comment: formData.comment,
        })
      );
    } else {
      dispatch(addReviewOperation(formData));
    }

    onClose();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    if (review) {
      dispatch(deleteReviewOperation(review._id));
    }
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
          <Rating
            onRatingChange={handleRatingChange}
            required
            value={formData.rating}
            disabled={!isEditing}
          ></Rating>
        </div>

        <CommentBox>
          <LabelText htmlFor="comment">Review</LabelText>

          <div >
            {isEditing ? (
              <IconContainer>
                <EditButton type="button" onClick={handleEdit}>
                  Edit
                </EditButton>
                <DeleteButton type="button" onClick={handleDelete}>
                  Delete
                </DeleteButton>
              </IconContainer>
            ) : null}
            <CommentText
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
              maxLength={300}
              placeholder="Enter Text"
              disabled={!isEditing}
            />
          </div>
        </CommentBox>
        <ButtonsBox>
          {review && !isEditing ? (
            <EditButton type="button" onClick={handleEdit}>
              Edit
            </EditButton>
          ) : null}
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
