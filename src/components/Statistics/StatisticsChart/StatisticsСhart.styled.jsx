import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { desktop, min, max, tablet, mobile } from 'styles/media';

export const DatePickerStyle = styled(DatePicker)`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  text-transform: uppercase;
  text-align: center;

  padding: 6px 12px;
  max-width: 172px;

  background-color: #3e85f3;
  color: white;

  border: 0;
  border-radius: 8px;

  ${min(tablet)} {
    font-size: 16px;
  }
`;

export const CalendarBox = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 26px;

  ${min(tablet)} {
    margin-bottom: 0;
    gap: 8px;
  }

  .react-datepicker__input-container input {
    outline: none;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker {
    background-color: #3e85f3;

    border-bottom: 0;
  }

  .react-datepicker__header {
    background-color: #3e85f3;
    width: 235px;

    border-bottom: 0;

    padding: 18px 0 9px 0;
  }

  .react-datepicker__navigation {
    top: 10px;
  }

  .react-datepicker__navigation-icon::before {
    border-color: #fff;
    border-width: 2px 2px 0 0;
    width: 4px;
    height: 4px;
    top: 10px;
  }

  .react-datepicker__navigation--previous {
    left: 0;
  }

  .react-datepicker__navigation-icon--next {
    left: 0;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.28px;

    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    padding: 0 20px;

    .react-datepicker__day-name {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  .react-datepicker__current-month {
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.32px;

    margin-bottom: 16px;
  }

  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 15px 20px 18px 20px;
  }

  .react-datepicker .react-datepicker__week {
    display: flex;
    justify-content: space-between;

    border-bottom: 0;
  }

  .react-datepicker .react-datepicker__day {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28;
    letter-spacing: -0.28px;

    border-right: 0;
    width: 22px;
    height: 22px;
  }

  .react-datepicker .react-datepicker__day:hover {
    background-color: #fff !important;
    color: #3e85f3;

    border-radius: 50% !important;
  }

  .react-datepicker .react-datepicker__day--selected {
    background-color: #fff !important;
    color: #3e85f3;

    border-radius: 50% !important;
  }

  .react-datepicker__day--outside-month {
    color: transparent !important;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  background-color: transparent;
  height: 30px;
  width: 35px;

  cursor: pointer;

  ${min(tablet)} {
    height: 32px;
  }

  &:hover svg {
    fill: #3e85f3;
  }
  & svg {
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ButtonLeft = styled(Button)`
  border-radius: 8px 0 0 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
`;

export const ButtonRight = styled(Button)`
  border-radius: 0 8px 8px 0;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-left: none;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 14px;
  border: 0.8px solid var(--border-chart);
  border-radius: 20px;

  height: 413px;

  ${max(mobile)} {
    max-width: 307px;
  }

  ${min(tablet)} {
    padding: 32px;
    border-radius: 29px;

    width: 640px;
    height: 424px;
  }
  ${min(desktop)} {
    padding: 40px;

    width: 860px;
    height: 440px;
  }
`;

export const StatisticsContainer = styled.div`
  padding: 28px 14px 0;
  max-width: 335px;
  background-color: var(--primary-bg-color);

  ${min(tablet)} {
    min-width: 704px;
    padding: 132px 32px 0;
  }

  ${min(desktop)} {
    min-width: 1087px;
    padding: 134px 113px 0;
  }
`;

export const NavContainer = styled.div`
  ${min(tablet)} {
    display: flex;
    justify-content: space-between;
    padding: 0 32px 0 23px;
    margin-bottom: 40px;
  }

  ${min(desktop)} {
    padding: 0 40px 0 40px;
  }
`;

export const LegendContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;

  ${min(tablet)} {
    margin-bottom: 0;
  }
`;

export const Legend = styled.p`
  display: flex;
  align-items: center;

  margin: 0;

  color: var(--secondary-text-color);
  font-size: 14px;
  line-height: 1.28;

  ${min(tablet)} {
    font-size: 16px;
  }

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
