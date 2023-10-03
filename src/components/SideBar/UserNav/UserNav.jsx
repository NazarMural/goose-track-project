import {
  NavTitle,
  NavList,
  NavListItem,
  NavLinkSideBar,
} from './UserNav.styled';

export const UserNavigation = ({ removeSideBar }) => {
  return (
    <>
      <NavTitle>User panel</NavTitle>
      <nav>
        <NavList>
          <NavListItem>
            <NavLinkSideBar to="account" onClick={removeSideBar}>
              Account
            </NavLinkSideBar>
          </NavListItem>
          <NavListItem>
            <NavLinkSideBar to="calendar" onClick={removeSideBar}>
              Calendar
            </NavLinkSideBar>
          </NavListItem>
          <NavListItem>
            <NavLinkSideBar to="statistics" onClick={removeSideBar}>
              Statistics
            </NavLinkSideBar>
          </NavListItem>
        </NavList>
      </nav>
    </>
  );
};
