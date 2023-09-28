import moment from 'moment';
import { CalendarGrid, Cell, Day, WrapperDay } from './CalendarTable.styled';

// console.log(moment());
window.moment = moment;

moment.updateLocale('en', { week: { dow: 1 } });
const startDay = moment().startOf('month').startOf('week');
const endDay = moment().endOf('month').endOf('week');
const startMonth = moment().startOf('month');
const endMonth = moment().endOf('month');
console.log(startMonth);
console.log(endMonth);
const dayDifference = endDay.diff(startDay, 'days') + 1;
console.log(dayDifference);
const weeks = dayDifference / 7;
console.log(weeks);

// console.log(monthStart.format('YYYY-MM-DD'));
// console.log(monthEnd.format('YYYY-MM-DD'));

export const CalendarTable = () => {
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(dayDifference)].map(() =>
    day.add(1, 'day').clone()
  );
  const isCurrentDay = day => moment().isSame(day, 'day');
  console.log(daysArray);
  return (
    <CalendarGrid rows={weeks}>
      {daysArray.map((dayItem, idx) => (
        <Cell key={idx}>
          <WrapperDay>
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
        </Cell>
      ))}
    </CalendarGrid>
  );
};
