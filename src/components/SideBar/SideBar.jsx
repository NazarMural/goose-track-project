import PropTypes from 'prop-types';
import { LogoutBtn } from './LogoutBtn.jsx/LogoutBtn';
import { SideBarEl } from './SideBar.styled';
import { TitleBox } from './TitleBox/TitleBox';
import { UserNavigation } from './UserNav/UserNav';
import { useMediaQuery } from 'react-responsive';

export const SideBar = ({ removeSideBar, showSideBar }) => {
  const desktop = useMediaQuery({ minWidth: 1440 });
  if (showSideBar && !desktop) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <SideBarEl showSideBar={showSideBar}>
      <TitleBox removeSideBar={removeSideBar} />
      <UserNavigation removeSideBar={removeSideBar} />
      <LogoutBtn />
    </SideBarEl>
  );
};

SideBar.propTypes = {
  removeSideBar: PropTypes.func,
  showSideBar: PropTypes.bool,
};
