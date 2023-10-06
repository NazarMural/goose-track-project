import styled from '@emotion/styled';
import { min, tablet } from 'styles/media';

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  ${min(tablet)} {
    margin-bottom: 28px;
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
  /* padding: 7px 0; */
  cursor: pointer;
  & use {
    fill: transparent;
  }
  ${min(tablet)} {
    height: 24px;
    width: 24px;
  }
`;
