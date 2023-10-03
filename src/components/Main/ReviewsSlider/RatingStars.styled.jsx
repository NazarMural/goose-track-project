import styled from '@emotion/styled';

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Star = styled.svg`
  width: 14px;
  height: 14px;
  fill: var(--star-color);
`;

export const FilledStar = styled(Star)`
  fill: var(--star-color-active);
`;
