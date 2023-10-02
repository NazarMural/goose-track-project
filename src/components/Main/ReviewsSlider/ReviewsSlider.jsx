import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews } from 'redux/reviews/reviewSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ReviewsSliderContainer,
  Title,
  SliderCustom,
  Avatar,
  AvatarImage,
  Box,
  BoxTop,
  UserName,
  Comment,
  IconArrowLeft,
  IconArrowRight,

} from './ReviewsSlider.styled';

import sprite from '../../../assets/images/icons/icons.svg';
import defaultAvatar from '../../../assets/images/default-avatar.png';
import RatingStars from './RatingStars';

const ReviewsSlider = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.reviews.reviewsItem);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    dispatch(fetchReviews());
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: windowWidth >= 1440 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: (
      <IconArrowLeft>
        <use
          xlinkHref={`${sprite}#icon-arrow-left`}
          width={50}
          height={50}
        />
      </IconArrowLeft>
    ),
    nextArrow: (
      <IconArrowRight>
        <use
          xlinkHref={`${sprite}#icon-arrow-right`}
          width={50}
          height={50}
        />
      </IconArrowRight>
    ),
  };

  return (
    <ReviewsSliderContainer>
      <Title>reviews</Title>
      <SliderCustom>
        <Slider {...settings}>
          {Array.isArray(reviews) &&
            reviews.map(({ _id, name, comment, rating, avatar }) => (
              <div key={_id}>
                <Box>
                  <BoxTop>
                    <Avatar>
                      {avatar ? (
                        <AvatarImage src={avatar} alt="Avatar" />
                      ) : (
                        <AvatarImage
                          src={defaultAvatar}
                          alt="Avatar as default"
                        />
                      )}
                    </Avatar>
                    <div>
                      <UserName>{name}</UserName>
                      <RatingStars rating={rating} />
                    </div>
                  </BoxTop>

                  <Comment>{comment}</Comment>
                </Box>
              </div>
            ))}
        </Slider>
      </SliderCustom>
    </ReviewsSliderContainer>
  );
};

export default ReviewsSlider;
