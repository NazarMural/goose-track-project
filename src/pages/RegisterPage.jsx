import AuthForm from 'components/AuthForm/AuthForm';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import { LinkStyled } from 'components/AuthLayout/AuthLayout.styled';
import React from 'react';
import { NavLink } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <AuthLayout img={'goose_register.png'}>
      <AuthForm />
      <LinkStyled to={'/login'}>Log In</LinkStyled>
    </AuthLayout>
  );
};

export default RegisterPage;
