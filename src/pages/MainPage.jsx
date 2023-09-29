import React from 'react';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      MainPage
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default MainPage;
