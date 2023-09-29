import styled from '@emotion/styled';
import { mobile, tablet, desktop, min, max } from 'styles/media';

export const AuthSectionContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--accent-color);
`;

export const AuthSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

export const AuthSectionImage = styled.picture`
  width: 142px;
  height: 142px;
  margin-left: auto;
  margin-right: auto;

  ${min(tablet)} {
    width: 150px;
    height: 149px;
  }
`;

export const AuthSectionTitle = styled.h1`
  margin-top: 2px;
  font-size: 44px;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-weight: 700;
  line-height: 1.09;
  color: var(--invert-text-color);

  ${min(tablet)} {
    font-size: 100px;
    line-height: 1.3;
  }

  ${min(desktop)} {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const AuthSectionTitleItalic = styled.span`
font-style: italic;
padding-right: 10px;`;



export const AuthSectionImageImg = styled.img`
  /* Звичайне зображення */
  width: 100%;
  height: 100%;
  // srcset: url('../../../images/mainPage/desktop_GooseMainPage.png 1x');
`;

export const IconDone = styled.svg`
  display: block;
  margin-top: 10px;
  margin-left: 500px;
  fill: black;
  color: white;
  stroke: pink;
  height: 40px;
  width: 40px;
`;

export const IconLogIn = styled.svg`
  
  
  height: 18px;
  width: 18px;
`;
