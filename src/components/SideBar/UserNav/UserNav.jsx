import PropTypes from 'prop-types';
import {
  NavTitle,
  NavList,
  NavListItem,
  NavLinkSideBar,
  IconWithStroke,
  IconWithFill,
} from './UserNav.styled';
import sprite from '../../../assets/images/icons/icons.svg';

export const UserNavigation = ({ removeSideBar }) => {
  const handleChangeCurrentPage = () => {
    removeSideBar();
  };

  return (
    <>
      <NavTitle>User panel</NavTitle>
      <nav>
        <NavList>
          <NavListItem page="account">
            <NavLinkSideBar to="account" onClick={handleChangeCurrentPage}>
              <IconWithStroke>
                <use xlinkHref={`${sprite}#icon-user`} />
              </IconWithStroke>
              My account
            </NavLinkSideBar>
          </NavListItem>
          <NavListItem page="calendar">
            <NavLinkSideBar to="calendar" onClick={handleChangeCurrentPage}>
              <IconWithStroke>
                <use xlinkHref={`${sprite}#icon-calendar`} />
              </IconWithStroke>
              Calendar
            </NavLinkSideBar>
          </NavListItem>
          <NavListItem page="statistics">
            <NavLinkSideBar to="statistics" onClick={handleChangeCurrentPage}>
              <IconWithFill>
                <use xlinkHref={`${sprite}#icon-chart`} />
              </IconWithFill>
              Statistics
            </NavLinkSideBar>
          </NavListItem>
        </NavList>
      </nav>
    </>
  );
};

UserNavigation.propTypes = {
  removeSideBar: PropTypes.func,
};
