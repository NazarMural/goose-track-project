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
  width: 177px;
  height: 764px;
  background-color: var(--sidebar-bg-color);
  z-index: 5;
  position: absolute;
  transform: translateX(${isShowSideBar});
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${min(tablet)} {
    width: 241px;
    height: 976px;
  }
  ${min(desktop)} {
    height: 852px;
    position: static;
    z-index: 1;
    transform: translateX(0%);
  }
`;

