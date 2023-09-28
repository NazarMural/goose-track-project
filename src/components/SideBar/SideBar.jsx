import { LogoutBtn } from './LogoutBtn.jsx/LogoutBtn';
import { SideBarContainer, TitleBox } from './SideBar.styled';
import { UserNavigation } from './UserNav/UserNav';

export const SideBar = () => {
  return (
    <aside>
      <SideBarContainer>
        <TitleBox>
          <svg width="20" height="20">
            <use href=""></use>
          </svg>
          <h2>GooseTrack</h2>
        </TitleBox>
        <UserNavigation />
        <LogoutBtn />
      </SideBarContainer>
    </aside>
  );
};
