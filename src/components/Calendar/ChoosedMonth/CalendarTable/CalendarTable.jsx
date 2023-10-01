import moment from 'moment';
import { CalendarGrid, Cell, Day, WrapperDay } from './CalendarTable.styled';
import { TaskList } from '../TaskList/TaskList';
// import { useState } from 'react';

const setDay = day => {
  moment.updateLocale('en', { week: { dow: 1 } });
  let currentDay;
  if (!day) {
    currentDay = moment();
  } else {
    currentDay = moment(day);
  }
  const startMonth = currentDay.clone().startOf('month'); // початок поточного місяця
  const endMonth = currentDay.clone().endOf('month'); // кінець поточного місяця

  const startDay = startMonth.clone().startOf('week'); // перший день тижня, в якому починається поточний місяць
  const endDay = endMonth.clone().endOf('week'); // останній день тижня, в якому закінчується поточний місяць

  const dayDifference = endDay.diff(startDay, 'days') + 1; // кількість днів, що відображаються на календарі (ячейки)
  const weeks = dayDifference / 7; //кількість тижнів в місяці (рядки)

  const startCalendar = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(dayDifference)].map(() =>
    startCalendar.add(1, 'day').clone()
  );

  const dates = {
    startMonth,
    endMonth,
    startDay,
    endDay,
    dayDifference,
    weeks,
    daysArray,
  };
  return dates;
};

export const CalendarTable = () => {
  //   const [date, setDate] = useState(Date.now);
  const { startMonth, endMonth, weeks, daysArray } = setDay();
  // console.log(startMonth);
  //   const dateData = setDay(date);
  //   console.log(dateData);

  const isCurrentDay = day => moment().isSame(day, 'day');

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
          {startMonth < dayItem && endMonth > dayItem && (
            <TaskList date={dayItem} />
          )}
        </Cell>
      ))}
    </CalendarGrid>
  );
};
