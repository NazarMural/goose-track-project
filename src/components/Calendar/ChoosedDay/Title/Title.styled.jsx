import styled from '@emotion/styled';
import { min, tablet } from 'styles/media';

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 18px 0;
  margin-bottom: ${({ tasks }) => (tasks.length === 0 ? '35px' : '24px')};
  ${min(tablet)} {
    margin-bottom: ${({ tasks }) => (tasks.length === 0 ? '35px' : '28px')};
    padding: 20px 20px 0;
  }
`;

export const MainTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  margin: 0;

  color: var(--primary-text-color);
  ${min(tablet)} {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const IconAddTask = styled.svg`
  height: 22px;
  width: 22px;
  stroke: var(--primary-text-color);
  cursor: pointer;
  & use {
    fill: transparent;
  }
  ${min(tablet)} {
    height: 24px;
    width: 24px;
  }
`;
