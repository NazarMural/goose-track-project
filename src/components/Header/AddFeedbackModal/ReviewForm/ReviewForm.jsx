import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Confirm, Notify } from 'notiflix';
import Modal from '../../../Modal/Modal';
import {
  FormContainer,
  LabelText,
  CommentBox,
  CommentText,
  SaveButton,
  CancelButton,
  EditButton,
  ButtonsBox,
  ButtonEdit,
  ButtonDel,
  IconEditBox,
  IconContainer,
  IconDel,
  IconEdit,
} from './ReviewForm.styled';
import sprite from '../../../../assets/images/icons/icons.svg';
import Rating from '../Rating/Rating';
import {
  addReviewOperation,
  updateReviewOperation,
  deleteReviewOperation,
} from '../../../../redux/reviews/operations';

const ReviewForm = ({ isOpen, onClose, review }) => {
  const [formData, setFormData] = useState({
    rating: '',
    comment: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setFormData({
      rating: review?.rating ?? '',
      comment: review?.comment ?? '',
    });
  }, [review]);

  const handleChange = e => {
    // if (!isEditing || !review) return;
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = newRating => {
    // if (!isEditing || !review) return;
    setFormData({
      ...formData,
      rating: newRating,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // if (!isEditing) return;
    if (formData?.rating === '') {
      Notify.warning('Please select a rating before submitting.');
      return;
    }

    if (isEditMode) {
      (async () => {
        await dispatch(
          updateReviewOperation({
            rating: formData?.rating,
            comment: formData?.comment,
          })
        );
      })();
    } else {
      dispatch(addReviewOperation(formData));
    }

    onClose();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    Confirm.show(
      'Confirm',
      'Are you sure you want to delete this?',
      'Delete',
      'Cancel',
      async () => {
        await dispatch(deleteReviewOperation());
        onClose();
      },
      () => {},
      {
        messageColor: 'var(--primary-text-color);',
        backgroundColor: 'var(--primary-bg-color)',
        okButtonBackground: 'var(--accent-color)',
        titleColor: 'var(--accent-color)',
      }
    );
  };

  const handleCancel = () => {
    setFormData({
      rating: '',
      comment: '',
    });
    onClose();
  };

  const closeButtonPosition = { top: '16px', right: '16px' };
  const isEditMode = review;

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
            value={parseInt(formData?.rating)}
            disabled={isEditMode && !isEditing}
          ></Rating>
        </div>
        <div>
          {isEditMode ? (
            <>
              <IconContainer>
                <IconEditBox>
                  <ButtonEdit type="button" onClick={handleEdit}>
                    <IconEdit>
                      <use xlinkHref={`${sprite}#icon-pencil`} width={16} />
                    </IconEdit>
                  </ButtonEdit>
                </IconEditBox>
                <ButtonDel type="button" onClick={handleDelete}>
                  <IconDel>
                    <use xlinkHref={`${sprite}#icon-trash`} width={16} />
                  </IconDel>
                </ButtonDel>
              </IconContainer>
              <CommentBox>
                <LabelText htmlFor="comment">Review</LabelText>
                <CommentText
                  id="comment"
                  name="comment"
                  value={formData?.comment}
                  onChange={handleChange}
                  required
                  maxLength={300}
                  placeholder="Enter Text"
                  disabled={!isEditing}
                />
              </CommentBox>
              {isEditing && (
                <ButtonsBox>
                  <EditButton type="submit">Edit</EditButton>
                  <CancelButton type="button" onClick={handleCancel}>
                    Cancel
                  </CancelButton>
                </ButtonsBox>
              )}
            </>
          ) : (
            <div>
              <CommentBox>
                <LabelText htmlFor="comment">Review</LabelText>
                <CommentText
                  id="comment"
                  name="comment"
                  value={formData?.comment}
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
            </div>
          )}
        </div>
      </FormContainer>
    </Modal>
  );
};

ReviewForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  review: PropTypes.object,
};

export default ReviewForm;
