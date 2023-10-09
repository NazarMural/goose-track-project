import styled from '@emotion/styled';

export const ContainerReplaceTask = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* gap: 14px; */
  background-color: var(--task-popup-bg);
  /* padding: 14px; */
  border: ${({ currentTheme }) =>
    currentTheme === 'light' ? 'none' : '1px solid #FFFFFF26'};
  border-radius: 8px;
  position: absolute;
  z-index: 2;
  margin-top: 12px;
  right: -1px;
  box-shadow: 0px 4px 16px 0px #1111111a;

  & div:first-of-type {
    padding: 14px 14px 7px 14px;
  }
  & div:last-of-type {
    padding: 7px 14px 14px 14px;
  }
`;

export const ReplaceTaskContainerText = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  white-space: nowrap;
  color: var(--task-popup-color-text);
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;

  cursor: pointer;

  &:hover {
    color: ${({ currentTheme }) =>
      currentTheme === 'light'
        ? 'var(--invert-text-color)'
        : 'var(--task-popup-color-text);'};
    & svg {
      stroke: ${({ currentTheme }) =>
        currentTheme === 'light'
          ? 'var(--invert-text-color)'
          : 'var(--task-popup-color-text);'};
    }
    background-color: var(--accent-color);
  }
`;

export const ReplaceTaskText = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;
