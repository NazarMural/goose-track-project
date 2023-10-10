import styled from '@emotion/styled';
import { mobile, max } from 'styles/media';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--primary-bg-color);
  border: 1px solid #dce3e5cc;
  border-radius: 8px;
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  z-index: 1000;
  ${max(mobile)} {
    width: 100%;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 999;
`;

export const Content = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

export const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 24px;
  padding: 0;
`;

export const IconClose = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--close-color);
  transition: color 0.3s ease-in-out;
  &:hover {
    stroke: #84828a;
  }
`;
