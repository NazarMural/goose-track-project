import { NavTitle, NavList } from './UserNav.styled';

export const UserNavigation = () => {
  return (
    <>
      <NavTitle>User panel</NavTitle>
      <nav>
        <NavList>
          <li>My account</li>
          <li>Calendar</li>
          <li>Statistics</li>
        </NavList>
      </nav>
    </>
  );
};
