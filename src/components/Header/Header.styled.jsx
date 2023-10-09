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
    max-width: 1087px;
    padding: 40px 32px 0px 32px;
  }
`;

