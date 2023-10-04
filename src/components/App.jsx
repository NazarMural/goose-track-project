import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainPage from '../pages/MainPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import { selectIsRefreshingUser } from 'redux/auth/selectors';
import { refreshUserOperation } from 'redux/auth/operations';

const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const MainLayout = lazy(() => import('./MainLayout/MainLayout'));
const AccountPage = lazy(() => import('../pages/AccountPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage'));
const ChoosedDay = lazy(() => import('./Calendar/ChoosedDay/ChoosedDay'));
const ChoosedMonth = lazy(() => import('./Calendar/ChoosedMonth/ChoosedMonth'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));
const ErrorPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(selectIsRefreshingUser);

  useEffect(() => {
    dispatch(refreshUserOperation());
  }, [dispatch]);

  return (
    !isRefreshingUser && (
      <Suspense fallback={null}>
        <Routes>
          <Route index element={<MainPage />} />{' '}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/calendar"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/calendar"
              />
            }
          />
          <Route path="/" element={<MainLayout />}>
            <Route
              path="/account"
              element={
                <PrivateRoute component={<AccountPage />} redirectTo="/login" />
              }
            />
            <Route
              path="/calendar"
              element={
                <PrivateRoute
                  component={<CalendarPage />}
                  redirectTo="/login"
                />
              }
            >
              <Route
                path="day/:currentDay"
                element={
                  <PrivateRoute
                    component={<ChoosedDay />}
                    redirectTo="/login"
                  />
                }
              />
              <Route
                path="month/:currentMonth"
                element={
                  <PrivateRoute
                    component={<ChoosedMonth />}
                    redirectTo="/login"
                  />
                }
              />
            </Route>
            <Route
              path="/statistics"
              element={
                <PrivateRoute
                  component={<StatisticsPage />}
                  redirectTo="/login"
                />
              }
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    )
  );
};
