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
    gap: 0;
    justify-content: space-between;
    max-width: 1087px;
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
  width: 296px;
  background-color: var(--primary-bg-color);
  border: 1px solid var(--calendar-grid-border);
  border-radius: 8px;
  scroll-snap-align: start;

  ${min(tablet)} {
    width: 299px;
    padding: 20px;
  }
  ${min(desktop)} {
    width: 306px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  ${min(tablet)} {
    margin-bottom: 28px;
  }
`;

export const Title = styled.h2`
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
  padding: 7px 0;
  cursor: pointer;
  & use {
    fill: transparent;
  }
  ${min(tablet)} {
    height: 24px;
    width: 24px;
  }
`;

export const ContainerListTasks = styled.div`
  max-height: 270px;
  overflow-y: auto;
  width: 104%;
  ${min(tablet)} {
    max-height: 395px;
  }
  /* width*/
  &::-webkit-scrollbar {
    width: 6px;
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

export const ListTasks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  list-style: none;
  margin: 0 0 13px 0;
  padding: 0;
  width: 296px;
  ${min(tablet)} {
    width: 299px;
    gap: 18px;
    margin: 0 0 17px 0;
  }
  ${min(desktop)} {
    width: 306px;
  }
`;

export const Task = styled.li`
  background-color: var(--page-bg-color);
  padding: 14px 14px 18px 14px;
  border: 1px solid var(--calendar-grid-border);

  border-radius: 8px;
`;

export const TaskTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-text-color);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0;
  margin: 0 0 28px 0;
  ${min(tablet)} {
  }
  ${min(desktop)} {
  }
`;

export const ContainerButtonsTask = styled.div`
  display: flex;
  align-items: end;
`;

export const TaskImage = styled.img`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  border: 1.8px solid var(--accent-color);
  border-radius: 50%;
  margin-right: 8px;
`;

export const TaskButtonPriority = styled.button`
  height: 20px;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  color: var(--task-priority-color);
  padding: 4px 12px;
  background-color: ${({ priority }) => {
    switch (priority) {
      case 'low':
        return 'var(--task-priority-low-bg)';
      case 'medium':
        return 'var(--task-priority-medium-bg)';
      case 'high':
        return 'var(--task-priority-high-bg)';

      default:
        return;
    }
  }};
  border: none;

  border-radius: 4px;
  ${min(tablet)} {
  }
  ${min(desktop)} {
  }
`;

export const ContainerIcons = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

export const IconTask = styled.svg`
  height: 14px;
  width: 14px;
  stroke: var(--primary-text-color);
  cursor: pointer;
  & use {
    fill: transparent;
  }
  ${min(tablet)} {
    height: 16px;
    width: 16px;
  }
  ${min(desktop)} {
  }
`;

export const ContainerReplaceTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: var(--task-popup-bg);
  padding: 14px;
  border-radius: 8px;
  position: absolute;
  margin-top: 12px;
  top: 100%;
  right: -26%;
  box-shadow: 0px 4px 16px 0px #1111111a;
`;

export const ReplaceTaskContainerText = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  white-space: nowrap;

  cursor: pointer;
`;

export const ReplaceTaskText = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: var(--task-popup-color-text);
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
