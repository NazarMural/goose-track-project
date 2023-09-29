import React from 'react';
import { Container, Layout } from './AuthLayout.styled';
import useImage from './useImage';

const AuthLayout = ({ children, login, img }) => {
  const { loading, error, image } = useImage('registerPage_loginPage/' + img);
  return (
    <Layout img={image} login={login}>
      <Container>{children}</Container>
    </Layout>
  );
};

export default AuthLayout;
