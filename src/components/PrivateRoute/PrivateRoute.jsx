import { Navigate } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectIsRefreshingUser,
} from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshingUser = useSelector(selectIsRefreshingUser);
  const shouldRedirect = !isLoggedIn && !isRefreshingUser;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
