import styled from '@emotion/styled';

import { tablet, min, desktop } from 'styles/media';

// ${min(tablet)} {
//     width: 410px;
//     margin-bottom: 247px;
// }
// ${min(desktop)} {
//     margin-bottom: 184px;
// }

export const MainLayoutContainer = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  height: 100%;
  max-width: 375px;
  background: #f7f6f9;
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
// export const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.8);
//   z-index: 1200;
// `;
