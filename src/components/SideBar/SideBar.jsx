import { CloseSideBarBtn } from './CloseBtn/CloseBtn';
import { LogoutBtn } from './LogoutBtn.jsx/LogoutBtn';
import { SideBarEl, TitleBox } from './SideBar.styled';
import { UserNavigation } from './UserNav/UserNav';
import { GooseImage } from './GooseImage/GooseImage';

export const SideBar = ({ removeSideBar, showSideBar }) => {
  return (
    <SideBarEl showSideBar={showSideBar}>
      <TitleBox>
        <GooseImage />
        <h2>
          G<span>oo</span>seTrack
        </h2>
        <CloseSideBarBtn removeSideBar={removeSideBar} />
      </TitleBox>
      <UserNavigation removeSideBar={removeSideBar} />
      <LogoutBtn />
    </SideBarEl>
  );
};
