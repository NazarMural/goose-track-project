import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';
import { CalendarWrapper } from './ChoosedMonth.styled';

export const ChoosedMonth = () => {
  return (
    <CalendarWrapper>
      <MonthCalendarHead />
      <CalendarTable />
    </CalendarWrapper>
  );
};
