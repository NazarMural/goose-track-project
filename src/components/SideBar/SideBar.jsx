import { CloseSideBarBtn } from './CloseBtn/CloseBtn';
import { LogoutBtn } from './LogoutBtn.jsx/LogoutBtn';
import { SideBarEl } from './SideBar.styled';
import { TitleBox } from './TitleBox/TitleBox';
import { UserNavigation } from './UserNav/UserNav';
// import { GooseImage } from './GooseImage/GooseImage';

export const SideBar = ({ removeSideBar, showSideBar }) => {
  return (
    <SideBarEl showSideBar={showSideBar}>
      <TitleBox />
      {/* <TitleBox>
        <GooseImage />
        <h2>
          G<span>oo</span>seTrack
        </h2>
        <CloseSideBarBtn removeSideBar={removeSideBar} />
      </TitleBox> */}
      <CloseSideBarBtn removeSideBar={removeSideBar} />
      <UserNavigation removeSideBar={removeSideBar} />
      <LogoutBtn />
    </SideBarEl>
  );
};
