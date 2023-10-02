import styled from '@emotion/styled';
import { tablet, min, desktop } from 'styles/media';

export const GooseImg = styled.img`
  width: 36px;
  height: 35px;

  ${min(tablet)} {
    width: 60px;
    height: 58px;
  }
  ${min(desktop)} {
    width: 71px;
    height: 68px;
  }
`;
