import styled from '@emotion/styled';
import { min, tablet } from 'styles/media';

export const MessageText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: ${({ error }) =>
    error ? 'var(--error-color)' : 'var(--success-color)'};
  margin-top: 8px;
`;

export const TasksIconStatus = styled.svg`
  position: absolute;
  fill: ${({ error }) =>
    error ? 'var(--error-color)' : 'var(--success-color)'};
  height: 22px;
  width: 22px;
  top: 43px;
  right: 14px;
  transform: translateY(-50%);

  ${min(tablet)} {
    height: 24px;
    width: 24px;
    top: 45px;
    right: 18px;
  }
`;