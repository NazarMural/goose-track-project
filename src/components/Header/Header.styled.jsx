import styled from '@emotion/styled';
import { tablet, min, desktop } from 'styles/media';

export const HeaderSection = styled.header`
  display: flex;
  padding: 24px 20px 0px 20px;
  max-width: 375px;
  height: auto;
  align-items: center;

  ${min(tablet)} {
    max-width: 768px;
    padding: 24px 32px 0px 32px;
  }
  ${min(desktop)} {
    max-width: 1440px;
    padding: 40px 32px 0px 32px;
  }
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
