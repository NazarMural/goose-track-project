import React from 'react';
import sprite from '../../assets/images/icons/icons.svg';
import { Link, LinkIcon, Links } from './AuthOther.styled';

const BASE_URL =
  'https://goose-track-project-backend.onrender.com/api/auth/google';

const AuthOther = () => {
  return (
    <Links>
      <Link href={BASE_URL}>
        <LinkIcon>
          <use xlinkHref={sprite + '#icon-google'} />
        </LinkIcon>
      </Link>
    </Links>
  );
};

export default AuthOther;
