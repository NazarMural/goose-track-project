import styled from '@emotion/styled';
import { desktop, min, tablet } from 'styles/media';

export const ContainerMain = styled.div`
  display: flex;
  gap: 30px;
  overflow-x: auto;
  overflow-y: hidden;
  /* height: 432px; */
  padding-bottom: 34px;
  scroll-snap-type: x mandatory;

  ${min(tablet)} {
    padding-bottom: 150px;
    gap: 16px;
  }
  ${min(desktop)} {
    padding-bottom: 0;
    gap: 27px;
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
  display: flex;
  flex-direction: column;

  max-height: 432px;
  height: fit-content;
  position: relative;
  background-color: var(--primary-bg-color);
  border: 1px solid var(--calendar-grid-border);
  border-radius: 8px;
  scroll-snap-align: start;

  ${min(tablet)} {
    max-height: 568px;
  }
  ${min(desktop)} {
  }
`;

export const ContainerButtonAddTask = styled.div`
  border-radius: 8px;
  padding: 0 20px 20px 20px;
  ${min(tablet)} {
    padding: 0 18px 18px 18px;
  }
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
