import styled from '@emotion/styled';
import { desktop, min } from 'styles/media';

export const AvatarLoaderStyled = styled.span`
  position: absolute;
  top: 14%;
  right: 14%;
  width: 48px;
  height: 48px;
  border: 5px solid var(--accent-color);
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotation 0.5s linear infinite;

  ${min(desktop)} {
    top: 12%;
    right: 12%;
    height: 90px;
    width: 90px;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
