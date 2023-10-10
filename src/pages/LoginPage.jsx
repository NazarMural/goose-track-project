import AuthForm from 'components/AuthForm/AuthForm';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import React from 'react';

const LoginPage = () => {
  return (
    <AuthLayout login img={'goose_login.png'}>
      <AuthForm login />
      <a href="http://localhost:3001/api/auth/google">Click me!!!</a>
    </AuthLayout>
  );
};

export default LoginPage;
