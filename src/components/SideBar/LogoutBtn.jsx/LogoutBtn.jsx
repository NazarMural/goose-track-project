import sprite from '../../../assets/images/icons/icons.svg';
import { LogoutButtonEl } from './LogoutBtn.styled';
import { useDispatch } from 'react-redux';
import { logOutOperation } from 'redux/auth/operations';

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.removeItem('type');
    localStorage.removeItem('date');
    document.body.style.overflow = 'auto';
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
