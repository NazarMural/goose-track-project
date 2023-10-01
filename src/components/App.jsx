import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import MainPage from '../pages/MainPage';
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const MainLayout = lazy(() => import('./MainLayout/MainLayout'));
const AccountPage = lazy(() => import('../pages/AccountPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage'));
const ChoosedDay = lazy(() => import('./Calendar/ChoosedDay/ChoosedDay'));
const ChoosedMonth = lazy(() => import('./Calendar/ChoosedMonth/ChoosedMonth'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/user" element={<MainLayout />}>
          <Route path="account" element={<AccountPage />} />
          {/* <Route path="calendar" element={<CalendarPage />} />
          <Route path="calendar/day/:currentDay" element={<ChoosedDay />} />
          <Route
            path="calendar/month/:currentMonth"
            element={<ChoosedMonth />}
          />
          <Route path="statistics" element={<StatisticsPage />} /> */}
        </Route>
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </Suspense>
  );
};
