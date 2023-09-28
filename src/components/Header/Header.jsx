import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import { FeedbackBtn } from './FeedbackBtn.jsx/FeedbackBtn';
import { ThemeToggler } from './ThemeToggler/ThemeToggler';
import { UserInfo } from './UserInfo/UserInfo';
import { HeaderSection } from './Header.styled';
export const Header = () => {
  return (
    <HeaderSection>
      <BurgerBtn />
      <FeedbackBtn />
      <ThemeToggler />
      <UserInfo />
    </HeaderSection>
  );
};
