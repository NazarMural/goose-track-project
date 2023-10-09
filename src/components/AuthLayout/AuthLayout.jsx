import React from 'react';
import { Container, Layout } from './AuthLayout.styled';
import PropTypes from 'prop-types';
import useImage from './useImage';
import AuthNavigate from 'components/AuthNavigate/AuthNavigate';

const AuthLayout = ({ children, login, img }) => {
  const { image } = useImage('registerPage_loginPage/' + img);
  return (
    <Layout img={image} login={login}>
      <Container>
        {children}
        <AuthNavigate login={login} />
      </Container>
    </Layout>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.element,
  login: PropTypes.bool,
  img: PropTypes.string.isRequired,
};

export default AuthLayout;
