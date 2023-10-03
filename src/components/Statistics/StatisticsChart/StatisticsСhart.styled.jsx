import styled from '@emotion/styled';
import { desktop, min, tablet } from 'styles/media';

export const СhartContainer = styled.div``;

export const StatisticsContainer = styled.div`
  padding: 28px 14px;
  max-width: 335px;
  background-color: var(--primary-bg-color);

  ${min(tablet)} {
    min-width: 704px;
  }

  ${min(desktop)} {
    min-width: 1087px;
  }
`;

export const LegendContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const Legend = styled.p`
  display: flex;
  align-items: center;

  color: var(--secondary-text-color);
  font-size: 14px;
  line-height: 1.28;

  ::before {
    content: '';
    display: inline-block;
    width: 8px; /* Діаметр кружечка */
    height: 8px; /* Діаметр кружечка */
    border-radius: 50%; /* Робимо кружечок */
    margin-right: 5px; /* Відстань між кружечком і текстом */
  }
`;

export const DayLegend = styled(Legend)`
  ::before {
    background-color: var(--legend-day); /* Червоний кружечок */
  }
`;

export const MonthLegend = styled(Legend)`
  ::before {
    background-color: var(--legend-month); /* Зелений кружечок */
  }
`;

export const ChartTasks = styled.p`
  margin-bottom: 14px;

  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
`;
