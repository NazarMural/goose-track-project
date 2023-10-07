import styled from '@emotion/styled';

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  z-index: 1000;
`;

export const Star = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--star-color);
`;

export const FilledStar = styled(Star)`
  fill: var(--star-color-active);
`;
