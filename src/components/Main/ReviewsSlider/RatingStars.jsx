import React from 'react';
import { StarContainer, Star, FilledStar } from './RatingStars.styled';
import sprite from '../../../assets/images/icons/icons.svg';

const RatingStars = ({ rating }) => {
  const maxRating = 5;
  const starElements = [];

  for (let i = 0; i < maxRating; i += 1) {
    if (i < rating) {
      starElements.push(
        <FilledStar key={i}>
          <use
            xlinkHref={`${sprite}#icon-star`}
            width={14}
            height={14}
           
          />
        </FilledStar>
      );
    } else {
      starElements.push(
        <Star key={i}>
          <use
            xlinkHref={`${sprite}#icon-star`}
            width={14}
            height={14}
          
          />
        </Star>
      );
    }
  }

  return <StarContainer>{starElements}</StarContainer>;
};

export default RatingStars;
