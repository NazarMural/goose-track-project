import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';
import { CalendarWrapper } from './ChoosedMonth.styled';

const ChoosedMonth = () => {
  return (
    <CalendarWrapper>
      <MonthCalendarHead />
      <CalendarTable />
      <h2>hello</h2>
      <h2>hello</h2>
      <h2>hello</h2>
      <h2>hello</h2>
      <h2>hello</h2>
    </CalendarWrapper>
  );
};

export default ChoosedMonth;
