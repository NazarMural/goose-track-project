import styled from '@emotion/styled';
import { tablet, desktop, min } from 'styles/media';

export const ReviewsSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 100px;
  //   margin-left: auto;
  //   margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  ${min(tablet)} {
    padding-left: 94px;
    padding-right: 94px;
  }
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  color: var(--accent-color);
  text-transform: uppercase;
  margin-top: 8px;
 margin-bottom: 0;

  ${min(tablet)} {
    line-height: 1.1;
    font-size: 40px;
   
  }
`;

export const SliderCustom = styled.div`
  //   display: flex;
  //   justify-content: center; 
  //   align-items: center; 
  //   margin-left: auto;
  //   margin-right: auto;
  //   max-width: 1184px;

  ${min(desktop)} {
    // margin-right: auto;
    // margin-left: auto;
    max-width: 1160px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 335px;
  height: 246px;
  padding: 24px 20px 24px;
  border-radius: 8px;
  border: 1px solid #1111111a;
  margin-left: auto;
  margin-right: auto;
  ${min(tablet)} {
    max-width: 580px;
    padding: 32px;
    height: 222px;
  }
  ${min(desktop)} {
    margin-right: 12px;
    margin-left: 12px;
  }
`;

export const BoxTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

export const Avatar = styled.div`
  display: flex;
`;

export const AvatarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ;
`;

export const UserName = styled.h3`
  margin-top: 0;
  margin-bottom: 13px;
  font-size: 18px;
  line-height: 1;
  color: var(--secondary-text-color);
`;

export const Comment = styled.p`
  font-size: 14px;
  line-height: 1.28;
  font-weight: 500;
  color: var(--review-text-color);
  margin-top: 24px;
  ${min(tablet)} {
   margin-left: 68px;
  }
`;

export const IconArrowLeft = styled.svg`
  display: flex;
  height: 50px;
  width: 50px;
  position: relative;
  top: 323px;
  margin-left: auto;
  margin-right: auto;
  //   padding-right: 12.5px;
  z-index: 100;
  ${min(tablet)} {
    height: 61px;
    width: 61px;
    top: 320px;
  }
  &.slick-disabled {
    fill: var(--review-btn-cancel-bg);
  }
`;

export const IconArrowRight = styled.svg`
  display: flex;
  height: 50px;
  width: 50px;
  position: relative;
  top: 27px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;

  ${min(tablet)} {
    height: 61px;
    width: 61px;
    top: 37px;
  }
  &.slick-disabled {
    fill: var(--review-btn-cancel-bg);
  }
`;
