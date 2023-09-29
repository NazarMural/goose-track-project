import { LogoutBtn } from './LogoutBtn.jsx/LogoutBtn';
import { SideBarContainer, TitleBox } from './SideBar.styled';
import { UserNavigation } from './UserNav/UserNav';
// import goose from '../../images/mainPage/desktop_GooseMainPage.png;';
// import sprite from '../../../images/icons/icons.svg';
//  <use xlinkHref={`${sprite}#icon-moon`} />;
// desktop_GooseMainPage.png;
export const SideBar = () => {
  return (
    <aside>
      <SideBarContainer>
        <TitleBox>
          <svg width="20" height="20">
            <use xlinkHref="../../images/mainPage/desktop_GooseMainPage.png;"></use>
          </svg>
          <h2>G<span>oo</span>seTrack</h2>
        </TitleBox>
        <UserNavigation />
        <LogoutBtn />
      </SideBarContainer>
    </aside>
  );
};
