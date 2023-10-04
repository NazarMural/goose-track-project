import { LogoutBtn } from './LogoutBtn.jsx/LogoutBtn';
import { SideBarEl } from './SideBar.styled';
import { TitleBox } from './TitleBox/TitleBox';
import { UserNavigation } from './UserNav/UserNav';

export const SideBar = ({
  removeSideBar,
  showSideBar
}) => {  
  return (   
    <SideBarEl showSideBar={showSideBar}>
      <TitleBox removeSideBar={removeSideBar} />
      <UserNavigation removeSideBar={removeSideBar} />
      <LogoutBtn />
    </SideBarEl>
  );
};
