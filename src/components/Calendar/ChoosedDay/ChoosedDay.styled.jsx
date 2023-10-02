import styled from '@emotion/styled';

export const ContainerMain = styled.div`
  padding: 20px;
  display: flex;
  gap: 30px;
  overflow-x: auto;
  overflow-y: hidden;
  height: 600px;
  background-color: #f7f6f9;
  /* width */
  &::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f2f2f2;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #e7e5e5;
    border-radius: 12px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #d4d2d2;
  }
`;
export const ContainerSecond = styled.div`
  position: relative;
  padding: 0 18px;
  max-width: 90%;
  flex-shrink: 0;
  flex-basis: 300px;
  background-color: #ffffff;
  border: 1px solid #dce3e580;
  border-radius: 8px;
  overflow-y: auto;
  /* width */
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f2f2f2;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #e7e5e5;
    border-radius: 12px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #d4d2d2;
  }
`;

export const ContainerTitle = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  position: sticky;
  background-color: #fff;
  padding-top: 18px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  margin: 0;

  color: #111;
`;

export const IconAddTask = styled.svg`
  height: 22px;
  width: 22px;
  stroke: black;
  cursor: pointer;
  & use {
    fill: transparent;
  }
`;

export const ListTasks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Task = styled.li`
  background-color: #f7f6f9;
  padding: 15px 15px 18px 15px;
  border: 1px solid #dce3e5cc;
  border-radius: 8px;
`;

export const TaskTitle = styled.h3`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 28px;
`;

export const ContainerButtonsTask = styled.div`
  display: flex;
  align-items: end;
`;

export const TaskImage = styled.img`
  width: 32px;
  height: 32px;
  border: 1.8px solid #3e85f3;
  border-radius: 50%;
  margin-right: 8px;
`;

export const TaskButtonPriority = styled.button`
  height: 20px;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  color: #f7f6f9;
  padding: 4px 12px;
  background-color: ${({ priority }) => {
    switch (priority) {
      case 'low':
        return '#72C2F8';
      case 'medium':
        return '#F3B249';
      case 'high':
        return '#EA3D65';

      default:
        return;
    }
  }};
  border: none;

  border-radius: 4px;
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
  stroke: black;
  cursor: pointer;
  & use {
    fill: transparent;
  }
`;

export const ContainerReplaceTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: #fff;
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
  color: #343434;
`;

export const ContainerButtonAddTask = styled.div`
  background-color: #fff;
  position: sticky;
  z-index: 2;
  bottom: 0px;
  width: 100%;
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding-bottom: 18px;
  margin-top: 14px;
  overflow: hidden;
`;

export const ButtonAddTask = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background-color: #e3f3ff;
  border: 1px dashed #3e85f3;
  border-radius: 8px;
  padding: 12px 0;
`;

export const IconButtonAddTask = styled.svg`
  width: 24px;
  height: 24px;
  stroke: black;
  & use {
    fill: transparent;
  }
`;

export const ButtonAddTaskText = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #111111;
`;
