import { LogoutBtn } from './LogoutBtn.jsx/LogoutBtn';
import { SideBarEl } from './SideBar.styled';
import { TitleBox } from './TitleBox/TitleBox';
import { UserNavigation } from './UserNav/UserNav';

export const SideBar = ({
  removeSideBar,
  showSideBar,
  // currentPage,
  // changeCurrentPage,
}) => {
  return (
    <SideBarEl showSideBar={showSideBar}>
      <TitleBox removeSideBar={removeSideBar} />
      <UserNavigation
        removeSideBar={removeSideBar}
        // currentPage={currentPage}
        // changeCurrentPage={changeCurrentPage}
      />
      <LogoutBtn />
    </SideBarEl>
  );
};
