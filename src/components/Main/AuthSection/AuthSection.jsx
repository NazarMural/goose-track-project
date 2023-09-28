import React from 'react';
import sprite from '../../../images/icons/icons.svg';

import {
  AuthSectionContainer,
  AuthSectionImage,
  AuthSectionImageImg,
  IconDone,
} from './AuthSection.styled';

import desktopGooseMainPage from '../../../images/mainPage/desktop_GooseMainPage.png';
import desktopGooseMainPage2x from '../../../images/mainPage/desktop_GooseMainPage@2x.png';

const AuthSection = () => {
  return (
    <AuthSectionContainer>
      <AuthSectionImage>
        <AuthSectionImageImg
          src={desktopGooseMainPage}
          srcSet={`${desktopGooseMainPage} 1x, ${desktopGooseMainPage2x} 2x`}
          alt="Гусак з пропозицією організувати життя та керувати роботою в команді"
        />
      </AuthSectionImage>
      <h1>GooseTrack</h1>

      <IconDone>
        <use xlinkHref={`${sprite}#icon-Done`} width={40} height={40} />
      </IconDone>
    </AuthSectionContainer>
  );
};

export default AuthSection;
