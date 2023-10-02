import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshingUser,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshingUser = useSelector(selectIsRefreshingUser);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshingUser,
    user,
  };
};
