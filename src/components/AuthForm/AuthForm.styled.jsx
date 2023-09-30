import styled from '@emotion/styled';
import { min, tablet } from 'styles/media';

const breakpoints = [375, 768, 1440];

export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const ContainerForm = styled.div`
  background-color: var(--primary-bg-color);
  border-radius: 8px;
  padding: 40px 24px;
  width: fill-available;
  width: 335px;

  ${min(tablet)} {
    padding: 40px 40px;
    width: 480px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: #3e85f3;
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
  color: #111111;
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
    touched ? (errors ? '#da1414;' : '#3CBC81;') : '#11111126'};

  border-radius: 8px;
  width: fill-available;

  &:valid {
    background-color: var(--primary-bg-color) !important;
  }

  &::placeholder {
    color: #11111126;
  }

  &:focus-visible {
    outline: none;
    border-color: #111111;
  }

  ${min(tablet)} {
    font-size: 16px;
    padding: 18px;
  }
`;

export const IconStatus = styled.svg`
  position: absolute;
  fill: #3cbc81;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #ffffff;

  box-shadow: 4px 2px 16px 0px #88a5bf7a;
  cursor: pointer;

  margin-top: 32px;
  padding: 14px 0;
  border-radius: 16px;
  background-color: #3e85f3;
  border: none;

  &:hover {
    background-color: #2b78ef;
  }
`;

export const ButtonText = styled.span``;

export const ButtonIcon = styled.svg`
  height: 22px;
  width: 22px;

  stroke: #fff;
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
  color: ${({ error }) => (error ? '#da1414;' : '#3CBC81;')};
  margin-left: 15px;
  margin-top: 8px;
`;
