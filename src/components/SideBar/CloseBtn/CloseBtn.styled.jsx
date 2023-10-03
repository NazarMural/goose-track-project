import styled from '@emotion/styled';
import { min, tablet, desktop } from 'styles/media';

export const CloseBtn = styled.button`
  display: block;
  border: none;
  background-color: inherit;
  align-items: center;
  padding: 0px;
  margin-left: auto;
  cursor: pointer;
  svg {
    fill: transparent;
    stroke: var(--primary-text-color);
    display: block;
    width: 24px;
    height: 24px;
    ${min(tablet)} {
      width: 34px;
      height: 34px;
    }
    ${min(desktop)} {
      display: none;
    }
  }
`;
