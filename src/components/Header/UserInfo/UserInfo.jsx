import { UserAvatarThumb, UserInfoBox, UserName } from './UserInfo.styled';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { useAuth } from 'hooks/useAuth';

export const UserInfo = () => {
  const {
    user: { name, userAvatar },
  } = useAuth();

  return (
    <UserInfoBox>
      <ThemeToggler />
      <UserName>{name ? name : 'User'}</UserName>
      <UserAvatarThumb userAvatarUrl={userAvatar}/>
    </UserInfoBox>
  );
};
