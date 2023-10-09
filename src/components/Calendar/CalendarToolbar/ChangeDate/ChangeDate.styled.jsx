import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';
// import { min, mobile, tablet } from 'styles/media';

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  gap: 8px;
`;

export const DateWrapper = styled.div`
  background-color: var(--accent-color);
  width: 150px;
  /* width: auto; */
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Date = styled.span`
  text-transform: uppercase;
  color: var(--invert-text-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`;

export const ToggleWrapper = styled.div`
  /* padding: 7px 10px; */
  display: flex;
  background: var(--calendar-grid-border);
  border: 1px solid var(--calendar-grid-border);
  border-radius: 8px;
  gap: 1px;
  overflow: hidden;
`;

export const Toggle = styled.div`
  padding: 7px 10px;
  background: var(--primary-bg-color);
`;

export const ToggleIcon = styled.svg`
  fill: var(--chevron-btn-color);
  &:hover {
    fill: var(--accent-color);
  }
`;
