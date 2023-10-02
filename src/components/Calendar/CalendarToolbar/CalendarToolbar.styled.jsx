import styled from '@emotion/styled';

export const Toolbar = styled.div`
  margin-bottom: 24px;
`;
export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const DateWrapper = styled.div`
  background-color: var(--accent-color);
  max-width: 128px;
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

export const TypeWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;

export const Type = styled.div`
  width: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  background-color: var(--switch-type-bg-active);
`;


