import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../../images/icons/icons.svg'; 



// import sprite from '../../../images/icons/icons.svg';

import {
  AuthSectionContainer,
  AuthSectionContent,
  AuthSectionImage,
  AuthSectionImageImg,
  AuthSectionTitle,
  AuthSectionTitleItalic,
  IconLogIn,
} from './AuthSection.styled';

import desktopGooseMainPage from '../../../images/mainPage/desktop_GooseMainPage.png';
import desktopGooseMainPage2x from '../../../images/mainPage/desktop_GooseMainPage@2x.png';

const AuthSection = () => {
  return (
    <AuthSectionContainer>
      <AuthSectionContent>
        <AuthSectionImage>
          <AuthSectionImageImg
            src={desktopGooseMainPage}
            srcSet={`${desktopGooseMainPage} 1x, ${desktopGooseMainPage2x} 2x`}
            alt="Гусак з пропозицією організувати життя та керувати роботою в команді"
          />
        </AuthSectionImage>
        <AuthSectionTitle>
          G<AuthSectionTitleItalic>oo</AuthSectionTitleItalic>seTrack
        </AuthSectionTitle>
        <div>
          <Link to="/login">
            Log in
            <IconLogIn>
              <use xlinkHref={`${sprite}#icon-log-out`} width={40} height={40} />
            </IconLogIn>
          </Link>
          <Link to="/register">Sign up</Link>
        </div>
      </AuthSectionContent>
    </AuthSectionContainer>
  );
};

export default AuthSection;
