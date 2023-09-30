import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
`;

export const TaskItem = styled.li`
  background-color: ${props => props.bg};
  border-radius: 8px;
  padding: 4px 8px;
  /* display: flex; */
  /* flex-wrap: nowrap; */
  margin-bottom: 8px;
  /* overflow-x: hidden; */
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word;
`;

export const TaskLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.color};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
