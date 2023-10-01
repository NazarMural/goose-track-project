import { NavLink } from 'react-router-dom';
import { NavTitle, NavList } from './UserNav.styled';

export const UserNavigation = () => {
  return (
    <>
      <NavTitle>User panel</NavTitle>
      <nav>
        <NavList>
          <li><NavLink to="account">Account</NavLink></li>
          <li><NavLink to="calendar">Calendar</NavLink></li>
          <li><NavLink to="statistics">Statistics</NavLink></li>
        </NavList>
      </nav>
    </>
  );
};
