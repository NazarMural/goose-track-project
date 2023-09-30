// ReviewsSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ReviewsSliderContainer,
  Title,
} from './ReviewsSlider.styled'; 

const ReviewsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <ReviewsSliderContainer>
      <Title>reviews</Title>
      <Slider {...settings}>
        <div>
          <h3>1апапап</h3>
        </div>
        <div>
          <h3>2папапап</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
    </ReviewsSliderContainer>
  );
};

export default ReviewsSlider;
