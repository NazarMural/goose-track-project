import React from 'react';
import MovingImage from './MovingImage';

import sprite from '../../../assets/images/icons/icons.svg';

import {
  AuthSectionContainer,
  AuthSectionContent,

  AuthSectionTitle,
  AuthSectionTitleItalic,
  IconLogIn,
  AuthSectionLinks,
  StyledNavLink,
  NavLinkButton,
} from './AuthSection.styled';

import desktopGooseMainPage from '../../../assets/images/mainPage/desktop_GooseMainPage.png';
import desktopGooseMainPage2x from '../../../assets/images/mainPage/desktop_GooseMainPage@2x.png';

const AuthSection = () => {
  const isMobile = window.innerWidth <= 768;
  const imageSize = isMobile ? 142 : 150;
  return (
    <AuthSectionContainer>
      <AuthSectionContent>
        <MovingImage
          src={desktopGooseMainPage}
          srcSet={`${desktopGooseMainPage} 1x, ${desktopGooseMainPage2x} 2x`}
          alt="Goose with a proposal to organize life and manage work in a team"
          width={imageSize}
          height={imageSize}
        />
        <AuthSectionTitle>
          G<AuthSectionTitleItalic>oo</AuthSectionTitleItalic>seTrack
        </AuthSectionTitle>
        <AuthSectionLinks>
          <NavLinkButton to="/login">
            Log in
            <IconLogIn>
              <use
                xlinkHref={`${sprite}#icon-log-in`}
                width={18}
                height={18}
                stroke="var(--accent-color)"
                fill="transparent"
              />
            </IconLogIn>
          </NavLinkButton>

          <StyledNavLink to="/register">Sign up</StyledNavLink>
        </AuthSectionLinks>
      </AuthSectionContent>
      <div>
       
      </div>
    </AuthSectionContainer>
  );
};

export default AuthSection;
