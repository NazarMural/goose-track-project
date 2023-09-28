import styled from '@emotion/styled';
// import { css } from '@emotion/react'; 


export const AuthSectionContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--accent-color);
`;

export const AuthSectionImage = styled.picture`
  width: 142px;
  height: 142px;

  @media (min-width: 768px) {
    width: 150px;
    height: 149px;
  }
`;



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