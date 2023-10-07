import AuthForm from 'components/AuthForm/AuthForm';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import { LinkStyled } from 'components/AuthLayout/AuthLayout.styled';
import React from 'react';

const LoginPage = () => {
  return (
    <AuthLayout login img={'goose_login.png'}>
      <AuthForm login />
    </AuthLayout>
  );
};

export default LoginPage;
