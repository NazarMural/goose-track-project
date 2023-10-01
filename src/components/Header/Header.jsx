import { BurgerBtn } from './BurgerBtn/BurgerBtn';
import { FeedbackBtn } from './FeedbackBtn.jsx/FeedbackBtn';
import { UserInfo } from './UserInfo/UserInfo';
import { HeaderSection } from './Header.styled';


export const Header = ({ addSideBar, showSideBar }) => {
  return (
    <HeaderSection showSideBar={showSideBar}>
      <BurgerBtn addSideBar={addSideBar} />
      {/* <Thumb> */}
      <FeedbackBtn />
      <UserInfo />
      {/* </Thumb> */}
    </HeaderSection>
  );
};
