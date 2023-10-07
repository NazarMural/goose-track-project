import styled from '@emotion/styled';
import { tablet, min } from 'styles/media';

export const FeedbackButton = styled.button`
  display: block;
  height: 100%;
  padding: 8px 20px;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  margin-left: auto;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;
  transition: ba  §ckground-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: var(--btn-bg-hover);
  }
  ${min(tablet)} {
    padding: 12px 32px;
    font-size: 14px;
    line-height: 18px;
  }
`;
