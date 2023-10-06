import styled from '@emotion/styled';
import { desktop, min, tablet } from 'styles/media';

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
export const TaskImagePlug = styled.svg`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  border: 1.8px solid var(--accent-color);
  border-radius: 50%;
  margin-right: 8px;
  fill: #3e85f32e;
  .dark & {
    fill: #ffffff2e;
  }
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
