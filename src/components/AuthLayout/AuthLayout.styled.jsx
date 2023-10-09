import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { desktop, min, tablet } from 'styles/media';

export const Layout = styled.div`
  height: 100vh;
  width: 100%;

  background-color: var(--auth-bg-color);

  ${min(desktop)} {
    &::after {
      content: '';

      background-image: url(${({ img }) => img});
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;

      ${props => (props.login ? 'right: 0;' : 'left: 0;')}
      width: ${props => (props.login ? '368px' : '400px')};
      height: ${props => (props.login ? '521px' : '416px')};
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 18px;
  ${min(tablet)} {
    margin-top: 24px;
  }
`;

export const LinkLine = styled.div`
  background-color: var(--accent-color);
  width: 2px;
  height: 120%;
  border: none;
  /* border-radius: 5px; */
  ${min(tablet)} {
  }
`;

export const LinkStyled = styled(Link)`
  position: relative;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;

  color: var(--accent-color);

  box-shadow: 0px 47px 355px 0px #00000012;

  &:after {
    content: '';
    background: none repeat scroll 0 0 transparent;
    bottom: -5px;
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: var(--accent-color);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }

  ${min(tablet)} {
    font-size: 18px;
    line-height: 24px;
  }
`;
