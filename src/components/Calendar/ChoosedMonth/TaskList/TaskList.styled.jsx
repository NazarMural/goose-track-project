import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';
import { desktop, min, tablet } from 'styles/media';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 2px;
  overflow-y: auto;
  max-width: 44px;
  /* width: 100%; */
  /* max-width: 100%; */
  height: 65px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--task-scrollbar-track);
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--task-scrollbar-thumb);
    border-radius: 12px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--task-scrollbar-thumb-hover);
  }

  ${min(tablet)} {
    max-width: 92px;
    /* max-width: 100%; */
    padding: 0 4px;
  }

  ${min(desktop)} {
    max-width: 139px;
  }
`;

export const TaskItem = styled.li`
  background-color: ${props => props.bg};
  color: ${props => props.color};
  border-radius: 8px;
  padding: 4px 8px;
  /* display: flex; */
  /* flex-wrap: nowrap; */
  margin-bottom: 8px;
  /* max-width: 100%; */
  /* overflow-x: hidden; */
  /* white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word; */
  max-width: 44px;  
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;

${min(tablet)} {
    max-width: 92px;
  }

  ${min(desktop)} {
    max-width: 139px;
  } 
`;

export const TaskLink = styled.p`
  text-decoration: none;
  /* color: ${props => props.color}; */
  color: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
