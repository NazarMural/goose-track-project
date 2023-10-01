import styled from '@emotion/styled';
import { desktop, min, tablet } from 'styles/media';

export const Main = styled.main`
  background-color: var(--page-bg-color);
  padding-top: 64px;
  padding-bottom: 40px;

  ${min(tablet)} {
    padding-bottom: 38px;
  }

  ${min(desktop)} {
    padding-top: 38px;
    padding-bottom: 32px;
  }
`;

export const Container = styled.div`
  padding: 0 20px;

  ${min(tablet)} {
    padding: 0 32px;
  }
`;
