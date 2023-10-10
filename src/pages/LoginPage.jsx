import AuthForm from 'components/AuthForm/AuthForm';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import React from 'react';

const LoginPage = () => {
  return (
    <AuthLayout login img={'goose_login.png'}>
      <AuthForm login />
      <a href="https://goose-track-project-backend.onrender.com/api/auth/google">
        Click me!!!
      </a>
    </AuthLayout>
  );
};

export default LoginPage;
