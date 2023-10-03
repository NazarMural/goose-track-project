import styled from '@emotion/styled';

export const CloseBtn = styled.button`
  display: block;
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background-color: inherit;
  align-items: center;
  padding: 0px;
  cursor: pointer;
  svg {
    fill: transparent;
    stroke: var(--primary-text-color);
    display: block;
    width: 24px;
    height: 24px;     
  }
`;
