import styled from '@emotion/styled';
import { tablet, min} from 'styles/media';

export const FeedbackButton = styled.button`
  display: block;
  height: 100%;
  padding: 8px 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  background: #3e85f3;
  color: #ffffff;
  margin-left: auto;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  ${min(tablet)} {
    padding: 12px 32px;
    font-size: 14px;
    line-height: 18px;
  }
`;
