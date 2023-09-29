import React from 'react';
import { MainLayoutContainer } from './MainLayout.styled';

const MainLayout = ({ children }) => {
  return <MainLayoutContainer>{children}</MainLayoutContainer>;
};

export default MainLayout;
