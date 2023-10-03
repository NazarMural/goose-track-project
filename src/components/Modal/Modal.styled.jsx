import styled from '@emotion/styled';
import { tablet, desktop, min } from 'styles/media';


export const Container = styled.div`
  position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;