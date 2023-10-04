import {
  UserAvatarThumb,
  UserInfoBox,
  UserName,
  UserImage,
  UserAvatar,
} from './UserInfo.styled';
import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { useAuth } from 'hooks/useAuth';
import sprite from '../../../assets/images/icons/icons.svg';

export const UserInfo = () => {
  const {
    user: { name, avatarURL },
  } = useAuth();

  return (
    <UserInfoBox>
      <ThemeToggler />
      <UserName>{name ? name : 'User'}</UserName>
      <UserAvatarThumb>
        {avatarURL ? (
          <UserImage src={avatarURL} />
        ) : (
          <UserAvatar>
            <use href={`${sprite}#icon-ph_user`}></use>
          </UserAvatar>
        )}
      </UserAvatarThumb>
    </UserInfoBox>
  );
};
