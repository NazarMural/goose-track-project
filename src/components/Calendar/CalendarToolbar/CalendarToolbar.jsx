import moment from 'moment';
import { useEffect, useState } from 'react';

import { Toolbar, TypeWrapper, TypeLink } from './CalendarToolbar.styled';
import ChangeDate from './ChangeDate/ChangeDate';
import { useParams } from 'react-router';

const CalendarToolbar = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [format, setFormat] = useState('');

  const month = moment(currentDate).format('YYYY-MM');
  const day = moment(currentDate).format('YYYY-MM-DD');
  const typeMonth = document.querySelector('#data-type-month');
  const typeDay = document.querySelector('#data-type-day');
  const params = useParams();

  useEffect(() => {
    const storedDate = localStorage.getItem('date');
    const storedType = localStorage.getItem('type');

    if (storedDate) {
      setCurrentDate(storedDate);
    } else {
      setCurrentDate(moment().format('YYYY-MM-DD'));
    }

    if (storedType) {
      setFormat(storedType);
    } else {
      setFormat('month');
    }
  }, []);

  useEffect(() => {
    if (params.currentDay) {
      typeDay?.classList.add('active');
    }
    if (params.currentMonth) {
      typeMonth?.classList.add('active');
      typeDay?.classList.remove('active');
    }
  });

  const handleChangeType = e => {
    switch (e.currentTarget.textContent) {
      case 'Month':
        setFormat('month');
        localStorage.setItem('type', 'month');
        break;
      case 'Day':
        setFormat('day');
        localStorage.setItem('type', 'day');
        break;
      default:
        return format;
    }
  };

  return (
    <Toolbar>
      <ChangeDate />
      <TypeWrapper>
        <TypeLink
          to={`month/${month}`}
          onClick={handleChangeType}
          id="data-type-month"
        >
          Month
        </TypeLink>
        <TypeLink
          to={`day/${day}`}
          onClick={handleChangeType}
          id="data-type-day"
        >
          Day
        </TypeLink>
      </TypeWrapper>
    </Toolbar>
  );
};

export default CalendarToolbar;
