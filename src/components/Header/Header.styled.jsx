import styled from '@emotion/styled';
import { tablet, min, desktop } from 'styles/media';


export const HeaderSection = styled.header`
  display: flex;
  padding: 24px 20px 0px 20px;
  max-width: 375px;
  height: auto;
  align-items: center;
  /* background: #f7f6f9; */
  /* justify-content: space-between; */

  ${min(tablet)} {
    max-width: 768px;
    padding: 24px 32px 0px 32px;
  }
  ${min(desktop)} {
    max-width: 1440px;
    padding: 40px 32px 0px 32px;
  }
`;

// export const Thumb = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   /* margin-left: 100px; */
// `;

// ${min(tablet)} {
//   padding: 64px 32px;
// }
// ${min(desktop)} {
// padding: 64px 128px;
// // margin-left: auto;
// // margin-right: auto;
// }
