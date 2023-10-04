import styled from '@emotion/styled';
import { tablet, min, desktop } from 'styles/media';

export const MainLayoutContainer = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  height: 100%;
  max-width: 375px;
  background: var(--page-bg-color);
  overflow-x: hidden;
  ${min(tablet)} {
    max-width: 768px;
  }
  ${min(desktop)} {
    max-width: 1440px;
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: var(--page-bg-color);
`;

