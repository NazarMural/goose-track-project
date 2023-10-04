import { useMediaQuery } from 'react-responsive';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import { FeedbackBtn } from './FeedbackBtn.jsx/FeedbackBtn';
import { UserInfo } from './UserInfo/UserInfo';
import { HeaderSection, PageTitle } from './Header.styled';
import { useLocation } from 'react-router-dom';

export const Header = ({ addSideBar, showSideBar }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  const location = useLocation();

  const defineCurentPage = () => {
    if (location.pathname.includes('account')) return 'User profile';
    if (location.pathname.includes('calendar')) return 'Calendar';
    if (location.pathname.includes('statistics')) return 'Statistics';
  };
  const currentPageTitle = defineCurentPage();

  return (
    <HeaderSection showSideBar={showSideBar}>
      {isDesktop ? (
        <PageTitle>{currentPageTitle}</PageTitle>
      ) : (
        <BurgerBtn addSideBar={addSideBar} />
      )}
      <FeedbackBtn />
      <UserInfo />
    </HeaderSection>
  );
};
