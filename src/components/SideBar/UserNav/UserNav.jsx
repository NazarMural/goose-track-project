import {
  NavTitle,
  NavList,
  NavListItem,
  NavLinkSideBar,
} from './UserNav.styled';
import sprite from '../../../assets/images/icons/icons.svg';
// import { pages } from 'components/MainLayout/MainLayout';

export const UserNavigation = ({
  removeSideBar,
  // currentPage,
  // changeCurrentPage,
}) => {
  const handleChangeCurrentPage = page => {
    removeSideBar();
    // changeCurrentPage(page);
  };
  // console.log(pages);
  return (
    <>
      <NavTitle>User panel</NavTitle>
      <nav>
        <NavList>
          <NavListItem>
            <NavLinkSideBar to="account" onClick={handleChangeCurrentPage}>
              <svg>
                <use xlinkHref={`${sprite}#icon-user`} />
              </svg>
              My account
            </NavLinkSideBar>
          </NavListItem>
          <NavListItem>
            <NavLinkSideBar to="calendar" onClick={handleChangeCurrentPage}>
              <svg>
                <use xlinkHref={`${sprite}#icon-calendar`} />
              </svg>
              Calendar
            </NavLinkSideBar>
          </NavListItem>
          <NavListItem>
            <NavLinkSideBar to="statistics" onClick={handleChangeCurrentPage}>
              <svg>
                <use xlinkHref={`${sprite}#icon-chart`} />
              </svg>
              Statistics
            </NavLinkSideBar>
          </NavListItem>
        </NavList>
      </nav>
    </>
  );
};
