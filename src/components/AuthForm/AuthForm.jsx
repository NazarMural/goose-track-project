import { Formik } from 'formik';
import React from 'react';
import {
  Button,
  ButtonImg,
  ButtonText,
  ContainerForm,
  ErrorMessageStyled,
  FieldStyled,
  FormStyled,
  Lable,
  LableText,
  Title,
} from './AuthForm.styled';
import { object, string } from 'yup';
import { useState } from 'react';

const SignUpSchema = object().shape({
  name: string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Firstname is required'),

  email: string().email().required('Email is required'),

  password: string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum'),
});

const LoginUpSchema = object().shape({
  email: string().email().required('Email is required'),

  password: string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum'),
});

const AuthForm = ({ login }) => {
  const [initialValues, setInitialValues] = useState(
    login ? { email: '', password: '' } : { name: '', email: '', password: '' }
  );
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <ContainerForm>
      <Title>{login ? 'Log In' : 'Sign Up'}</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={login ? LoginUpSchema : SignUpSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={onSubmit}
      >
        <FormStyled>
          {!login && (
            <Lable htmlFor="name">
              <LableText>Name</LableText>

              <FieldStyled
                type="text"
                name="name"
                placeholder="Enter your name"
              />

              <ErrorMessageStyled name="name" component="span" />
            </Lable>
          )}

          <Lable htmlFor="email">
            <LableText>Email</LableText>
            <FieldStyled
              type="email"
              name="email"
              // value=""
              autoComplete="off"
              placeholder="Enter email"
            />
            <ErrorMessageStyled name="email" component="span" />
          </Lable>

          <Lable htmlFor="password">
            <LableText>Password</LableText>
            <FieldStyled
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessageStyled name="password" component="span" />
          </Lable>

          <Button type="submit">
            <ButtonText>{login ? 'Log In' : 'Sign Up'}</ButtonText>
            <ButtonImg src="" alt="" />
          </Button>
        </FormStyled>
      </Formik>
    </ContainerForm>
  );
};

export default AuthForm;
