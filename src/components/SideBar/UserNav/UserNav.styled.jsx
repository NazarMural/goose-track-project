import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { tablet, min } from 'styles/media';

export const NavTitle = styled.h3`
  margin: 0 0 24px 0;
  color: var(--sidebar-text-color);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  ${min(tablet)} {
    font-size: 14px;
  }
`;
export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px;
  padding: 0px;
  gap: 18px;
  list-style: none;
`;

export const NavListItem = styled.li``;

export const NavLinkSideBar = styled(NavLink)`
  text-decoration: none;
  color: var(--sidebar-text-color);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  ${min(tablet)} {
    font-size: 16px;
  }
`;
