import { UserInfoBox, UserName } from './UserInfo.styled';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
export const UserInfo = () => {
  return (
    <UserInfoBox>
      <ThemeToggler/>
      <UserName>Name</UserName>
      <div>Photo</div>
    </UserInfoBox>
  );
};
