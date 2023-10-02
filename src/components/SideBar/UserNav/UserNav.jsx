import { NavLink } from 'react-router-dom';
import { NavTitle, NavList } from './UserNav.styled';

export const UserNavigation = ({ removeSideBar }) => {
  return (
    <>
      <NavTitle>User panel</NavTitle>
      <nav>
        <NavList>
          <li>
            <NavLink to="account" onClick={removeSideBar}>
              Account
            </NavLink>
          </li>
          <li>
            <NavLink to="calendar" onClick={removeSideBar}>
              Calendar
            </NavLink>
          </li>
          <li>
            <NavLink to="statistics" onClick={removeSideBar}>
              Statistics
            </NavLink>
          </li>
        </NavList>
      </nav>
    </>
  );
};
