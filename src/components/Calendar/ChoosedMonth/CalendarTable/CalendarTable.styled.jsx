import styled from '@emotion/styled';

export const CalendarGrid = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dce3e580;
  background-color: var(--calendar-grid-border);
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(${props => props.rows}, 1fr);
  border: var(--calendar-grid-border);
`;

export const Cell = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #ffffff;
  background-color: var(--cell-background);
  padding: 8px 4px;
`;

export const WrapperDay = styled.div`
  display: flex;
  text-align: end;
  align-items: center;
  justify-content: center;
  height: 22px;
  width: 22px;
  /* padding: 4px 6px; */
  font-size: 12px;
  font-weight: 700;
`;

export const Day = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  color: ${props => props.color};
  background: ${props => props.background};
`;
