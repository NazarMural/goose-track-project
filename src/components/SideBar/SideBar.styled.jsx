import styled from '@emotion/styled';
import { tablet, min, desktop } from 'styles/media';

const isShowSideBar = props => {
  if (props.showSideBar) return '0%';
  return '-110%';
};

export const SideBarEl = styled.aside`
  display: inline-flex;
  padding: 24px 24px;
  flex-direction: column;
  min-width: 241px;

  height: 100vh;
  background: #fff;
  z-index: 5;
  position: absolute;
  transform: translateX(${isShowSideBar});
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${min(desktop)} {
    position: static;
    z-index: 1;
    transform: translateX(0%);
  }
`;

export const TitleBox = styled.div`
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
      font-size: 24px;
      font-style: italic;
      font-weight: 700;
      line-height: 24px;
      margin-left: -2px;
      margin-right: 2px;
      ${min(tablet)} {
        font-size: 22px;
      }
      ${min(desktop)} {
        font-size: 24px;
        line-height: 24px;
      }
    }
  }
`;
