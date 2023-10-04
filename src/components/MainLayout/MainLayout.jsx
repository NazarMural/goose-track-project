import { useState } from 'react';
import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { MainLayoutContainer } from './MainLayout.styled';
import { Container } from './MainLayout.styled';

export const pages = {
  account: 'User Profile',
  calendar: 'Calendar',
  statistics: 'Statistics',
};

const MainLayout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  // const [currentPage, setCurrentPage] = useState(pages.account);

  const addSideBar = () => setShowSideBar(true);
  const removeSideBar = () => setShowSideBar(false);

  // const changeCurrentPage = newCurentPage => setCurrentPage(newCurentPage);

  return (
    <MainLayoutContainer>
      <SideBar
        removeSideBar={removeSideBar}
        showSideBar={showSideBar}
        // currentPage={currentPage}
        // changeCurrentPage={changeCurrentPage}
      />
      <Container>
        <Header
          addSideBar={addSideBar}
          showSideBar={showSideBar}
          // currentPage={currentPage}
        />
        <Container>
          {children}
          <Outlet />
        </Container>
      </Container>
    </MainLayoutContainer>
  );
};

export default MainLayout;


