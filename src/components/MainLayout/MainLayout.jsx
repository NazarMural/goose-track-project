import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { MainLayoutContainer, SideBarPlaceholder } from './MainLayout.styled';
import { Container } from './MainLayout.styled';
import { useCallback } from 'react';

export const pages = {
  account: 'User Profile',
  calendar: 'Calendar',
  statistics: 'Statistics',
};

const MainLayout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const addSideBar = () => setShowSideBar(true);

  const removeSideBar = useCallback(() => {
    setShowSideBar(false);
  }, []);

  const desktop = useMediaQuery({ minWidth: 1440 });

  return (
    <MainLayoutContainer>
      <SideBar removeSideBar={removeSideBar} showSideBar={showSideBar} />
      {desktop && <SideBarPlaceholder />}
      <Container>
        <Header addSideBar={addSideBar} showSideBar={showSideBar} />
        <Container>
          {children}
          <Outlet />
        </Container>
      </Container>
    </MainLayoutContainer>
  );
};

export default MainLayout;
