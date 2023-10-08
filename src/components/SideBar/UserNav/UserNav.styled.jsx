import styled from '@emotion/styled';
import { NavLink, useLocation } from 'react-router-dom';
import { tablet, min } from 'styles/media';

// const isFilledIcon = props => {
//   if (props.to === 'statistics') return 'var(--sidebar-text-color)';
//   return 'transparent';
// };

export const NavTitle = styled.h3`
  margin: 0 0 24px 0;
  color: var(--sidebar-navTitle-color);
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

  background-color: ${props => {
    const location = useLocation();
    if (location.pathname.includes(props.page))
      return 'var(--sidebar-accent-color)';
    return 'transparent';
  }};

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

export const IconWithFill = styled.svg`
  stroke: transparent;
  fill: var(--sidebar-text-color);
  /* stroke: var(--sidebar-text-color);
    fill: transparent; */
  /* width: 20px;
  height: 20px;
  margin-right: 8px;
  ${min(tablet)} {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  } */
`;

export const IconWithStroke = styled.svg`
  stroke: var(--sidebar-text-color);
  fill: transparent;
`;
