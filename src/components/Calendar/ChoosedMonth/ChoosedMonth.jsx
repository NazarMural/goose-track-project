import { CalendarTable } from './CalendarTable/CalendarTable';
import { CalendarWrapper } from './ChoosedMonth.styled';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';

export const ChoosedMonth = () => {
  return (
    <CalendarWrapper>
      <MonthCalendarHead />
      <CalendarTable />
    </CalendarWrapper>
  );
};
