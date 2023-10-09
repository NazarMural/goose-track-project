import styled from '@emotion/styled';

export const GooseImageEl = styled.img`
  display: block;
  width: 64px;
  height: auto;
`;

export const PageTitle = styled.h2`
  color: var(--primary-text-color);
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 32px; 
`;

export const GooseText = styled.p`
  display: block;
  color: var(--primary-text-color);
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  span {
    color: var(--accent-color);
  }
`;

export const Thumb = styled.div`
  margin-left: 8px;
`;
