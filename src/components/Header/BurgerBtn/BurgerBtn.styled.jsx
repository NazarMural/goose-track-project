import styled from '@emotion/styled';

export const BurgerButtonEl = styled.button`
  display: block;
  width: 24px;
  height: 24px;
  padding: 0px;
  border: none;
  background-color: inherit;
  cursor: pointer;

  svg {
    fill: transparent;
    stroke: var(--btn-bg-color);
    width: 24px;
    height: 24px;
  }
`;
