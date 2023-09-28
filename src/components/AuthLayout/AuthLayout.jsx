import React from 'react';
import { Container, Layout } from './AuthLayout.styled';

const AuthLayout = ({ children, login, img }) => {
  return (
    <Layout img={img} login={login}>
      <Container>{children}</Container>
    </Layout>
  );
};

export default AuthLayout;
