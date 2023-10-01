import styled from '@emotion/styled';

export const MainLayoutContainer = styled.div`
  display: flex;
  position: relative;
  /* flex-direction: row-reverse; */
  margin: 0 auto;
  height: 100%;
  max-width: 375px;
  padding: 24px 20px 40px 20px;
  background: #f7f6f9;
  /* height: auto; */
  /* overflow: hidden; */
  /* overflow-x: hidden; */
`;

export const Container = styled.div`
  /* margin: 0 auto;
  max-width: 375px; */
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
