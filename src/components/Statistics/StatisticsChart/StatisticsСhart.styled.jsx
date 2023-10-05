import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { desktop, min, max, tablet, mobile } from 'styles/media';

export const DatePickerStyle = styled(DatePicker)``;

export const СhartBox = styled.div`
  height: 300px;

  ${max(mobile)} {
    max-width: 279px;
  }

  ${min(tablet)} {
    width: 576px;
    height: 331px;
  }
  ${min(desktop)} {
    width: 780px;
    height: 331px;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 14px;
  border: 0.8px solid var(--border-chart);
  border-radius: 20px;

  ${min(tablet)} {
    padding: 32px;
    border-radius: 29px;
  }
  ${min(desktop)} {
    padding: 40px;
  }
`;

export const CanvasChart = styled.canvas``;

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
  margin: 0;
  margin-bottom: 14px;

  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
`;
