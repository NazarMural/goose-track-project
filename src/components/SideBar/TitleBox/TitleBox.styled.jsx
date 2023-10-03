import styled from '@emotion/styled';
import { tablet, min, desktop } from 'styles/media';

export const TitleBoxEl = styled.div`
  display: flex;
  h2 {
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    ${min(tablet)} {
      font-size: 22px;
    }
    ${min(desktop)} {
      font-size: 24px;
      line-height: 24px;
    }

    span {
      color: #3e85f3;
      font-family: Inter;
      font-size: 16px;
      font-style: italic;
      font-weight: 700;
      line-height: 24px;
      margin-left: -1px;
      margin-right: 2px;
      ${min(tablet)} {
        font-size: 22px;
      }
      ${min(desktop)} {
        font-size: 24px;
      }
    }
  }
`;
