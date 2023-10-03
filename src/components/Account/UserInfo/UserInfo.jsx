import React from 'react';
import sprite from '../../../assets/images/icons/icons.svg';

import {
  UserContainer,
  AvatarWrapper,
  UserAvatar,
  AddAvatar,
  AddAvatarButton,
  UserName,
  UserStatus,
} from './UserInfo.styled';

export const UserInfo = () => {
  return (
    <UserContainer>
      <AvatarWrapper>
        <AddAvatarButton type="submit">
          <AddAvatar>
            <use href={`${sprite}#icon-plus`}></use>
          </AddAvatar>
        </AddAvatarButton>
        <UserAvatar>
          <use href={`${sprite}#icon-ph_user`}></use>
        </UserAvatar>
      </AvatarWrapper>
      <UserName>Username</UserName>
      <UserStatus>User</UserStatus>
    </UserContainer>
  );
};
