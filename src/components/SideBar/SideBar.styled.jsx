import styled from '@emotion/styled';
import { tablet, min, desktop, max } from 'styles/media';

const isShowSideBar = props => {
  if (props.showSideBar) return '0%';
  return '-110%';
};

export const SideBarEl = styled.aside`
  display: inline-flex;
  padding: 24px 24px;
  flex-direction: column;
  width: 225px;
  background-color: var(--sidebar-bg-color);
  z-index: 5;
  position: absolute;
  transform: translateX(${isShowSideBar});
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${min(tablet)} {
    width: 289px;
  }
  ${min(desktop)} {
    height: 100vh;
    /* max-height: 900px; */
    position: fixed;
    z-index: 1;
    transform: translateX(0%);
  }

  ${max(desktop - 0.02)} {
    height: 100vh;
    max-height: 900px;
  }
`;
