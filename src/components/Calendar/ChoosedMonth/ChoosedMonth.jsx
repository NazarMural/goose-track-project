import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';
import { CalendarWrapper } from './ChoosedMonth.styled';

const ChoosedMonth = () => {
  return (
    <CalendarWrapper>
      <MonthCalendarHead />
      <CalendarTable />
    </CalendarWrapper>
  );
};

export default ChoosedMonth;
