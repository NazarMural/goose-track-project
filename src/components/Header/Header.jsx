import { useMediaQuery } from 'react-responsive';
import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import { FeedbackBtn } from './FeedbackBtn.jsx/FeedbackBtn';
import { UserInfo } from './UserInfo/UserInfo';
import { HeaderSection } from './Header.styled';

export const Header = ({ addSideBar, showSideBar }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  return (
    <HeaderSection showSideBar={showSideBar}>
      {!isDesktop && <BurgerBtn addSideBar={addSideBar} />}
      <FeedbackBtn />
      <UserInfo />
    </HeaderSection>
  );
};
