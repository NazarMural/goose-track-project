import styled from '@emotion/styled';
import { desktop, min, tablet } from 'styles/media';

export const ContainerMain = styled.div`
  display: flex;
  gap: 30px;
  overflow-x: auto;
  overflow-y: hidden;
  height: 432px;
  scroll-snap-type: x mandatory;

  ${min(tablet)} {
    height: 568px;
    gap: 16px;
  }
  ${min(desktop)} {
    gap: 27px;
    /* justify-content: space-between; */
    /* max-width: 1106px; */
  }
  /* width*/
  &::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: var(--task-scrollbar-track);
    border-radius: 12px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--task-scrollbar-thumb);
    border-radius: 12px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--task-scrollbar-thumb-hover);
  }
`;

export const ContainerSecond = styled.div`
  position: relative;
  padding: 18px;
  /* width: 296px; */
  flex: none;
  background-color: var(--primary-bg-color);
  border: 1px solid var(--calendar-grid-border);
  border-radius: 8px;
  scroll-snap-align: start;

  ${min(tablet)} {
    width: 344px;
    padding: 20px;
  }
  ${min(desktop)} {
    width: 323px;
    /* flex-basis: 377px; */
  }
`;

export const ContainerButtonAddTask = styled.div`
  background-color: var(--primary-bg-color);
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding-bottom: 20px;
`;

export const ButtonAddTask = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background-color: var(--add-task-bg);
  border: 1px dashed var(--accent-color);
  border-radius: 8px;
  padding: 12px 0;
`;

export const IconButtonAddTask = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--primary-text-color);
  & use {
    fill: transparent;
  }
`;

export const ButtonAddTaskText = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: var(--primary-text-color);
`;
