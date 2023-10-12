import ButtonLoader from 'components/Loaders/ButtonLoader/ButtonLoader';
import sprite from '../../../assets/images/icons/icons.svg';
import { LogoutButtonEl } from './LogoutBtn.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOutOperation } from 'redux/auth/operations';
import { selectIsAuthLoading } from 'redux/auth/selectors';

export const LogoutBtn = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsAuthLoading);
  const handleLogOut = () => {
    localStorage.removeItem('type');
    localStorage.removeItem('date');
    document.body.style.overflow = 'auto';
    dispatch(logOutOperation());
  };
  return (
    <LogoutButtonEl type="button" onClick={handleLogOut}>
      {isLoading && <ButtonLoader />}
      Logout
      <svg>
        <use xlinkHref={`${sprite}#icon-log-out`} />
      </svg>
    </LogoutButtonEl>
  );
};
