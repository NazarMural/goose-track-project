import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';
import { CalendarWrapper } from './ChoosedMonth.styled';

const ChoosedMonth = () => {
  const handleThemeClick = () => {
    document.documentElement.classList.toggle('dark');
  };
  return (
    <CalendarWrapper>
      <button onClick={handleThemeClick}>Change theme</button>
      <MonthCalendarHead />
      <CalendarTable />
    </CalendarWrapper>
  );
};

export default ChoosedMonth;
