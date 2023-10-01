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

export const LinkStyled = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;

  color: var(--accent-color);

  box-shadow: 0px 47px 355px 0px #00000012;
  margin-top: 18px;

  ${min(tablet)} {
    font-size: 18px;
    line-height: 24px;

    margin-top: 24px;
  }
`;
