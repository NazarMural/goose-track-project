import styled from '@emotion/styled';
// import { tablet, min, desktop } from 'styles/media';

const isShowSideBar = props => {
  if (props.showSideBar) return '+125%';
  return '-75%';
};

export const HeaderSection = styled.header`
  display: flex;
  width: 100%;
  height: 32px;
  align-items: center;
  background: #f7f6f9;
  justify-content: space-between;
/* 
  transform: translateX(${isShowSideBar});
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1); */
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
