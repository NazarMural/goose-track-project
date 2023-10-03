import styled from '@emotion/styled';
// import { pages } from 'components/MainLayout/MainLayout';
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

export const NavListItem = styled.li`
  display: block;

  background-color: inherit;
  padding: 10px 0px 10px 12px;
  border-radius: 8px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: var(--sidebar-accent-color);
  }
`;

export const NavLinkSideBar = styled(NavLink)`
  display: flex;
  align-items: center;
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

  svg {
    stroke: var(--sidebar-text-color);
    fill: transparent;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    ${min(tablet)} {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  }
`;
