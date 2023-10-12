import styled from '@emotion/styled';
import { tablet, min, max, desktop } from 'styles/media';

export const LogoutButtonEl = styled.button`
  display: flex;
  width: 131px;
  height: 46px;
  margin: auto auto 0px 0px;
  flex-shrink: 0;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  background-color: var(--btn-bg-color);
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: translatez(0);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: var(--btn-bg-hover);
  }

  color: var(--invert-text-color);
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.36px;

  ${min(tablet)} {
    font-size: 18px;
    width: 141px;
    height: 56px;
    line-height: 24px;
  }

  svg {
    stroke: var(--btn-text-color);
    fill: transparent;
    width: 20px;
    height: 20px;
    margin-left: 6px;
  }

  ${max(desktop - 0.02)} {
    margin-bottom: 35px;
  }
`;
