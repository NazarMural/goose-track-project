import React from 'react';
import {
  Container,
  Layout,
  LinkLine,
  LinkStyled,
  Links,
} from './AuthLayout.styled';
import useImage from './useImage';

const AuthLayout = ({ children, login, img }) => {
  const { image } = useImage('registerPage_loginPage/' + img);
  return (
    <Layout img={image} login={login}>
      <Container>
        {children}
        <Links>
          <LinkStyled to={'/'}>Home</LinkStyled>
          <LinkLine />
          {login ? (
            <LinkStyled to={'/register'}>Sign up</LinkStyled>
          ) : (
            <LinkStyled to={'/login'}>Log In</LinkStyled>
          )}
        </Links>
      </Container>
    </Layout>
  );
};

export default AuthLayout;
