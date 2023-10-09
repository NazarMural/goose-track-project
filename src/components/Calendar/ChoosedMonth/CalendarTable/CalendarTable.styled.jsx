import styled from '@emotion/styled';
// import { NavLink } from 'react-router-dom';
import { desktop, min, tablet } from 'styles/media';

export const CalendarGrid = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #dce3e580; */
  background-color: var(--calendar-grid-border);
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  border: 1px solid var(--calendar-grid-border);
  border-radius: 8px;
  overflow: hidden;
`;

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  /* background-color: #ffffff; */
  background-color: var(--cell-background);
  padding: 8px 0;
  height: 94px;

  ${min(tablet)} {
    padding: 14px 0;
    min-height: 144px;
  }

  ${min(desktop)} {
    min-height: 125px;
  }
`;

export const WrapperDay = styled.div`
  display: flex;
  text-align: end;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  height: 22px;
  width: 22px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 14px;
  margin-right: 4px;
  cursor: pointer;

  ${min(tablet)} {
    margin-right: 14px;
  }
`;

export const Day = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  border-radius: 6px;
  color: ${props => props.color};
  background: ${props => props.background};
`;
