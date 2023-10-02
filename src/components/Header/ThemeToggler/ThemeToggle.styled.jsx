import styled from '@emotion/styled';
import { tablet, min } from 'styles/media';

export const ThemeBtn = styled.button`
  display: block;
  align-items: center;
  padding: 0px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  svg {
    fill: #3e85f3;
    display: block;
    width: 20px;
    height: 20px;
    ${min(tablet)} {
      width: 32px;
      height: 32px;
    }
  }
`;


