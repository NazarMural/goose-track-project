import styled from '@emotion/styled';

export const ButtonLoaderStyled = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 300%;
  height: 100%;
  bottom: auto;
  margin: auto;
  z-index: -1;
  background: linear-gradient(
    90deg,
    var(--btn-bg-color) 0%,
    rgba(255, 38, 38, 0.5) 40%,
    rgba(255, 38, 38, 0.5) 60%,
    var(--btn-bg-color) 100%
  );

  animation: loading 0.5s ease infinite;
  @keyframes loading {
    from {
      transform: translateX(-10%);
    }
    to {
      transform: translateX(110%);
    }
  }
`;
