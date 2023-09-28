import { ErrorMessage, Field, Form } from 'formik';

import styled from '@emotion/styled';

const breakpoints = [375, 768, 1440];

export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export const ContainerForm = styled.div`
  background-color: var(--primary-bg-color);
  border-radius: 8px;
  padding: 40px 24px;
  width: fill-available;
  width: 335px;

  ${mq[1]} {
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

  ${mq[1]} {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

export const FormStyled = styled(Form)`
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

  ${mq[1]} {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const FieldStyled = styled(Field)`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  padding: 14px;
  border: 1px solid;
  border-color: #11111126;
  border-radius: 8px;
  margin-bottom: 8px;

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

  ${mq[1]} {
    font-size: 16px;
    padding: 18px;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #ffffff;

  box-shadow: 4px 2px 16px 0px #88a5bf7a;

  margin-top: 32px;
  padding: 14px 0;
  border-radius: 16px;
  background-color: #3e85f3;
  border: none;

  &:hover {
    background-color: #2b78ef;
  }
  ${mq[1]} {
    font-size: 18px;
    line-height: 24px;
    padding: 16px 0;
    margin-top: 48px;
  }
`;

export const ButtonText = styled.span``;

export const ButtonImg = styled.img``;

export const ErrorMessageStyled = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: #da1414;
  margin-left: 15px;
`;
