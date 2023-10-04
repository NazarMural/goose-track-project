import styled from '@emotion/styled';
import { min, tablet } from 'styles/media';

export const ContainerForm = styled.div`
  background-color: var(--public-page-bg);
  border-radius: 8px;
  padding: 40px 24px;
  width: fill-available;
  max-width: 335px;

  ${min(tablet)} {
    padding: 40px 40px;
    max-width: 480px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: var(--accent-color);
  box-shadow: 0px 47px 355px 0px #00000012;
  margin-bottom: 32px;

  ${min(tablet)} {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Lable = styled.label`
  display: flex;
  flex-direction: column;
`;

export const LableText = styled.span`
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  color: var(--primary-text-color);
  margin-bottom: 8px;

  ${min(tablet)} {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const FieldContainer = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

export const FieldStyled = styled.input`
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding: 14px;
  border: 1px solid;
  border-color: ${({ errors, touched }) =>
    touched
      ? errors
        ? 'var(--error-color);'
        : 'var(--success-color);'
      : 'var(--input-border-color);'};

  border-radius: 8px;
  width: fill-available;

  &:-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s;
  }

  &::placeholder {
    color: var(--placeholder-color);
  }

  &:focus-visible {
    outline: none;
    border-color: var(--input-border-color-focus);
  }

  ${min(tablet)} {
    font-size: 16px;
    padding: 18px;
  }
`;

export const IconShowHidePassword = styled.svg`
  position: absolute;
  fill: black;
  height: 26px;
  width: 26px;
  right: 45px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  ${min(tablet)} {
    height: 28px;
    width: 28px;
    right: 49px;
  }
`;

export const IconStatus = styled.svg`
  position: absolute;
  fill: ${({ error }) =>
    error ? 'var(--error-color)' : 'var(--success-color)'};
  height: 22px;
  width: 22px;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);

  ${min(tablet)} {
    height: 24px;
    width: 24px;
    right: 18px;
  }
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: var(--invert-text-color);
  overflow: hidden;
  transform: translatez(0);

  box-shadow: 4px 2px 16px 0px #88a5bf7a;
  cursor: pointer;

  margin-top: 32px;
  padding: 14px 0;
  border-radius: 16px;
  background-color: var(--btn-bg-color);
  border: none;

  &:hover {
    background-color: var(--btn-bg-hover);
  }
`;

export const ButtonText = styled.span``;

export const ButtonLoader = styled.span`
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

  animation: loading 1.5s ease infinite;
  @keyframes loading {
    from {
      transform: translateX(-10%);
    }
    to {
      transform: translateX(110%);
    }
  }
`;

export const ButtonIcon = styled.svg`
  height: 22px;
  width: 22px;

  stroke: var(--invert-text-color);
  & use {
    fill: transparent;
  }

  ${min(tablet)} {
    height: 24px;
    width: 24px;
  }
`;

export const ErrorMessageText = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: ${({ error }) =>
    error ? 'var(--error-color)' : 'var(--success-color)'};
  margin-left: 15px;
  margin-top: 8px;
`;
