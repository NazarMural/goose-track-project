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
import {
  selectIsUpdatingUserAvatar,
  selectUser,
  selectUserAvatar,
} from 'redux/auth/selectors';
import { optimizeImage } from 'helpers/optimizeImage';
import AvatarLoader from 'components/Loaders/AvatarLoader/AvatarLoader';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const avatarCloud = useSelector(selectUserAvatar);
  const isLoading = useSelector(selectIsUpdatingUserAvatar);

  const { name } = useSelector(selectUser);

  const fileInputChange = async e => {
    const file = e.target.files[0];

    const optimizedImage = await optimizeImage(file);

    const formData = new FormData();
    formData.append('avatar', optimizedImage);

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
          {isLoading && <AvatarLoader />}
          {!isLoading &&
            (avatarCloud ? (
              <AvatarImage src={avatarCloud} alt="avatar" />
            ) : (
              <UserAvatar>
                <use href={`${sprite}#icon-ph_user`}></use>
              </UserAvatar>
            ))}
        </AvatarWrapper>
      </UserWrapper>
      <UserName>{name}</UserName>
      <UserStatus>User</UserStatus>
    </UserContainer>
  );
};
