import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      MainLayout
      <NavLink to="account">Account</NavLink>
      <NavLink to="calendar">Calendar</NavLink>
      <NavLink to="statistics">Statistics</NavLink>
      <Outlet />
    </div>
  );
};

export default MainLayout;
