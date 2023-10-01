import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';
import { CalendarWrapper, Container } from './ChoosedMonth.styled';

const ChoosedMonth = () => {

  const handleThemeClick = () => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <CalendarWrapper>
      {/* <Container> */}
        <button onClick={handleThemeClick}>Change theme</button>
        <MonthCalendarHead />
        <CalendarTable />
      {/* </Container> */}
    </CalendarWrapper>
  );
};

export default ChoosedMonth;
