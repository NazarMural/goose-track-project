import styled from '@emotion/styled';
import { tablet, desktop, min } from 'styles/media';


export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  background-color: green;
overflow: auto;
`;

export const Content = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;