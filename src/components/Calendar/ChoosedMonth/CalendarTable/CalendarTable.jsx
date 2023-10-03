import moment from 'moment';
import { CalendarGrid, Cell, Day, WrapperDay } from './CalendarTable.styled';
import { TaskList } from '../TaskList/TaskList';
import { setDay } from 'helpers/setDay';
import { useNavigate, useParams } from 'react-router';

export const CalendarTable = () => {
  const { currentMonth } = useParams();
  const navigate = useNavigate();
  const [month, year] = currentMonth.split('-');
  const date = moment(`${year}-${month}-01`, 'YYYY-MMMM-DD');

  const { startMonth, endMonth, weeks, daysArray } = setDay(date);
  // console.log(daysArray);
  const isCurrentDay = day => moment().isSame(day, 'day');

  const handleNavigateToDay = day => {
    navigate(`day/${day}`);
  };

  return (
    <CalendarGrid rows={weeks}>
      {daysArray.map((dayItem, idx) => (
        <Cell key={idx}>
          <WrapperDay onClick={() => handleNavigateToDay(dayItem)}>
            <Day
              color={`${
                isCurrentDay(dayItem)
                  ? 'var(--date-color-accent)'
                  : `${
                      startMonth > dayItem || endMonth < dayItem
                        ? 'transparent'
                        : 'var(--date-color)'
                    }`
              }`}
              background={`${
                isCurrentDay(dayItem) ? 'var(--accent-color)' : 'transparent'
              }`}
            >
              {dayItem.format('D')}
            </Day>
          </WrapperDay>
          {startMonth < dayItem && endMonth > dayItem && (
            <TaskList currentDate={dayItem} />
          )}
        </Cell>
      ))}
    </CalendarGrid>
  );
};
