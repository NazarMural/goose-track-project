import { useState } from 'react';
import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { MainLayoutContainer } from './MainLayout.styled';
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


  return (
    <MainLayoutContainer>
      <SideBar removeSideBar={removeSideBar} showSideBar={showSideBar} />
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
