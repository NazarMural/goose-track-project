import styled from '@emotion/styled';

export const HeadContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: center;
  text-align: center;
  align-items: center;
  border: 1px solid var(--calendar-grid-border);
  border-radius: 8px;
  margin-bottom: 14px;
  overflow: hidden;

  & div:nth-of-type(${({ isSelected }) => isSelected + 1}) {
    & div {
      color: #ffffff;
      background-color: #3e85f3;
      border-radius: 6px;
    }
  }
`;

export const HeadCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--cell-background);

  & div {
    color: #343434;
    /* opacity: 0; */
    background-color: var(--cell-background);

    border-radius: 6px;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
  }

  padding: 16px 0;
  cursor: pointer;
  &:hover {
    & div {
      opacity: 1;
      color: #ffffff;
      background-color: #3e85f3;
    }
  }
`;

export const NameWeek = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const DayWeekContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  width: 20px;
  height: 22px;
  /* text-align: center; */
`;
export const DayWeekText = styled.span``;
