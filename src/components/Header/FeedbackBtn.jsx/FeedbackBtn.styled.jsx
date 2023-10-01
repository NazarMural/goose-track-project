import styled from '@emotion/styled';
// import { tablet, min, desktop } from 'styles/media';

export const FeedbackButton = styled.button`
  display: block;
  /* width: 97px; */
  height: 100%;
  padding: 8px 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  background: #3e85f3;
  color: #ffffff;
  /* margin-left: 0 auto; */
  /* {min(tablet)} {
    margin-left: 80px;
  } */
  @media screen and (min-width: 375px) {
    margin-left: 80px;
  }
`;
