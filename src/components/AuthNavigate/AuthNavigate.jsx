import React from 'react';
import { LinkLine, LinkStyled, Links } from './AuthNavigate.styled';
import PropTypes from 'prop-types';

const AuthNavigate = ({ login }) => {
  return (
    <Links>
      <LinkStyled to={'/'}>Home</LinkStyled>
      <LinkLine />
      {login ? (
        <LinkStyled to={'/register'}>Sign up</LinkStyled>
      ) : (
        <LinkStyled to={'/login'}>Log In</LinkStyled>
      )}
    </Links>
  );
};

AuthNavigate.propTypes = {
  login: PropTypes.bool,
};

export default AuthNavigate;
