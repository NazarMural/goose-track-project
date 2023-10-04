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
  InputFile,
  AvatarImage,
  UserWrapper,
} from './UserInfo.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAvatarOperation } from 'redux/auth/operations';
import { selectUserAvatar } from 'redux/auth/selectors';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const avatarCloud = useSelector(selectUserAvatar);

  const fileInputChange = e => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('avatar', file);
    dispatch(updateUserAvatarOperation(formData));
  };

  return (
    <UserContainer>
      <UserWrapper>
        <AddAvatarButton>
          <InputFile type="file" name="avatar" onChange={fileInputChange} />
          <AddAvatar>
            <use href={`${sprite}#icon-plus`}></use>
          </AddAvatar>
        </AddAvatarButton>
        <AvatarWrapper>
          {avatarCloud ? (
            <AvatarImage src={avatarCloud} alt="avatar" />
          ) : (
            <UserAvatar>
              <use href={`${sprite}#icon-ph_user`}></use>
            </UserAvatar>
          )}
        </AvatarWrapper>
      </UserWrapper>
      <UserName>Username</UserName>
      <UserStatus>User</UserStatus>
    </UserContainer>
  );
};
