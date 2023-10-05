import moment from 'moment';

export const setDay = day => {
  moment.updateLocale('en', { week: { dow: 1 } });
  let currentDay;
  if (!day) {
    currentDay = moment();
  } else {
    currentDay = moment(day).clone();
  }
  const startMonth = currentDay.clone().startOf('month'); // початок поточного місяця
  const endMonth = currentDay.clone().endOf('month'); // кінець поточного місяця

  const startDay = startMonth.clone().startOf('week'); // перший день тижня, в якому починається поточний місяць
  const endDay = endMonth.clone().endOf('week'); // останній день тижня, в якому закінчується поточний місяць

  const startWeek = currentDay.clone().startOf('week'); // перший день тижня, якому знаходиться обрана дата
  const endWeek = currentDay.clone().endOf('week'); // останній  день тижня, якому знаходиться обрана дата

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
    startWeek,
    endWeek,
    dayDifference,
    weeks,
    daysArray,
  };
  return dates;
};
