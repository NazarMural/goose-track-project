import { LogoutButtonEl } from './LogoutBtn.styled';
import sprite from '../../../assets/images/icons/icons.svg';
import { useDispatch } from 'react-redux';
import { logOutOperation } from 'redux/auth/operations';

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutOperation());
  };
  return (
    <LogoutButtonEl type="button" onClick={handleLogOut}>
      Logout
      <svg>
        <use xlinkHref={`${sprite}#icon-log-out`} />
      </svg>
    </LogoutButtonEl>
  );
};
