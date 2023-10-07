import styled from '@emotion/styled';

export const ContainerReplaceTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: var(--task-popup-bg);
  padding: 14px;
  border-radius: 8px;
  position: absolute;
  z-index: 2;
  margin-top: 12px;
  right: -10px;
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
