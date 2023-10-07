import React, { useState } from 'react';
import { StarContainer, Star, FilledStar } from './Rating.styled';
import sprite from '../../../../assets/images/icons/icons.svg';

const Rating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = selectedRating => {
    setRating(selectedRating);
    onRatingChange(selectedRating);
  };

  return (
    <div>
      <StarContainer>
        {[1, 2, 3, 4, 5].map(star => (
          <StarContainer key={star} onClick={() => handleStarClick(star)}>
            {star <= rating ? (
              <FilledStar>
                <use xlinkHref={`${sprite}#icon-star`} width={24} height={24} />
              </FilledStar>
            ) : (
              <Star>
                <use xlinkHref={`${sprite}#icon-star`} width={24} height={24} />
              </Star>
            )}
          </StarContainer>
        ))}
      </StarContainer>
    </div>
  );
};

export default Rating;
