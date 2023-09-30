import styled from '@emotion/styled';
import { tablet, desktop, min} from 'styles/media';
import { NavLink } from 'react-router-dom';

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
  width: 100%;
`;


export const AuthSectionTitle = styled.h1`
  margin-top: 32px;
  margin-bottom: 32px;
  font-size: 44px;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-weight: 700;
  line-height: 1.09;
  color: var(--invert-text-color);

  ${min(tablet)} {
    font-size: 100px;
    line-height: 1.3;
    margin-bottom: 40px;
    margin-top: 30px;
  }

  ${min(desktop)} {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const AuthSectionTitleItalic = styled.span`
  font-style: italic;
  padding-right: 4px;
  ${min(tablet)} {
    padding-right: 10px;
  }
`;





export const AuthSectionLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-decoration: none;

  ${min(tablet)} {
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 24px;

  }
`;



export const StyledNavLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  line-height: 1.29;
  color: var(--invert-text-color);
  margin-left: auto;
  margin-right: auto;

`;


export const NavLinkButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  gap: 6px;
  color: var(--accent-color);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.28px;
  line-height: 1.29;
  background-color: var(--invert-text-color);
  padding: 14px 33.5px;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  ${min(tablet)} {
    order: 1;
    padding: 14px 28px;
  }
`;



export const IconLogIn = styled.svg`
  height: 18px;
  width: 18px;
 
`;


