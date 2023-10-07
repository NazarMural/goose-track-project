import AuthForm from 'components/AuthForm/AuthForm';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import { LinkStyled } from 'components/AuthLayout/AuthLayout.styled';
import React from 'react';

const RegisterPage = () => {
  return (
    <AuthLayout img={'goose_register.png'}>
      <AuthForm />
    </AuthLayout>
  );
};

export default RegisterPage;
