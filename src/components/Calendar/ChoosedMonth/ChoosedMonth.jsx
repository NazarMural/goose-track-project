import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';
import { CalendarWrapper, Container } from './ChoosedMonth.styled';

const ChoosedMonth = () => {
  return (
    <CalendarWrapper>
      <Container>
        <MonthCalendarHead />
        <CalendarTable />
      </Container>
    </CalendarWrapper>
  );
};

export default ChoosedMonth;
