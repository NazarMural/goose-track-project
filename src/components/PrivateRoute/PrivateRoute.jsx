import { Navigate } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectIsRefreshingUser,
} from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshingUser = useSelector(selectIsRefreshingUser);
  const shouldRedirect = !isLoggedIn && !isRefreshingUser;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.element,
  redirectTo: PropTypes.string,
};
export default PrivateRoute;
