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
    fill: var(--btn-bg-color);
    display: block;
    width: 20px;
    height: 20px;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
      fill: var(--btn-bg-hover);
    }

    ${min(tablet)} {
      width: 32px;
      height: 32px;
    }
  }
`;


