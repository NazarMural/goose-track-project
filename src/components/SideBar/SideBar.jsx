import { CloseSideBarBtn } from './CloseBtn/CloseBtn';
import { LogoutBtn } from './LogoutBtn.jsx/LogoutBtn';
import { SideBarContainer, TitleBox } from './SideBar.styled';
import { UserNavigation } from './UserNav/UserNav';

export const SideBar = ({ removeSideBar }) => {
  return (
    <aside>
      <SideBarContainer>
        <TitleBox>
          <svg width="20" height="20">
            <use xlinkHref="../../images/mainPage/desktop_GooseMainPage.png;"></use>
          </svg>
          <h2>
            G<span>oo</span>seTrack
          </h2>
        </TitleBox>
        <CloseSideBarBtn removeSideBar={removeSideBar} />
        <UserNavigation />
        <LogoutBtn />
      </SideBarContainer>
    </aside>
  );
};
