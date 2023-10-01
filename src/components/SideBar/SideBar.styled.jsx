import styled from '@emotion/styled';

const isShowSideBar = props => {
  if (props.showSideBar) return '0%';
  return '-110%';
};

export const SideBarEl = styled.aside`
  display: inline-flex;
  padding: 24px 24px;
  flex-direction: column;
  min-width: 241px;
  background: #fff;
  z-index: 5;
  position: absolute;

  /* transform: translateY(101%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1); */

  /* transform: translateX(-101%) */

  transform: translateX(${isShowSideBar});
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const TitleBox = styled.div`
  display: flex;
  h2 {
    color: #3e85f3;
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    span {
      color: #3e85f3;
      font-family: Inter;
      font-size: 24px;
      font-style: italic;
      font-weight: 700;
      line-height: 24px;
      margin-left: -2px;
      margin-right: 2px;
    }
  }
`;
