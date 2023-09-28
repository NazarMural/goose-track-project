import React from 'react';
import { Container, Layout, LinkStyled } from './AuthLayout.styled';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children, login, img }) => {
  return (
    <Layout img={img} login={login}>
      <Container>
        {children}
        {/* <LinkStyled>Log In</LinkStyled> */}
      </Container>
    </Layout>
  );
};

export default AuthLayout;
