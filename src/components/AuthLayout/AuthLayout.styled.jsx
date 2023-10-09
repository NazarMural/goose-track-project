import styled from '@emotion/styled';
import { desktop, min } from 'styles/media';

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
