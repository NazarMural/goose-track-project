import React, { useEffect, useState } from 'react';
import { MainContainer } from 'components/MainContainer/MainContainer';
import CalendarToolbar from 'components/Calendar/CalendarToolbar/CalendarToolbar';
import { Outlet, useNavigate } from 'react-router';
import moment from 'moment';

const CalendarPage = () => {
  const navigate = useNavigate();
  // const [currentDate, setCurrentDate] = useState(
  //   localStorage.getItem('date') || moment().format('YYYY-MM-DD').toString()
  // );
  // const [format, setFormat] = useState(localStorage.getItem('type') || 'month');
  // let format = ;
  const date = moment().format('YYYY-MM-DD').toString();

  useEffect(() => {
    const month = date.slice(0, -3);
    navigate(`/calendar/month/${month}`);
    localStorage.setItem('date', date);
    localStorage.setItem('type', 'month');
  }, []);

  // useEffect(() => {
  //   let date;
  //   const format = localStorage.getItem('type') || 'month';
  //   switch (format) {
  //     case 'month':
  //       date = moment(
  //         localStorage.getItem('date') ||
  //           moment().format('YYYY-MM-DD').toString()
  //       ).format('YYYY-MM');
  //       navigate(`/calendar/month/${date}`);
  //       break;
  //     case 'day':
  //       date = moment(
  //         localStorage.getItem('date') ||
  //           moment().format('YYYY-MM-DD').toString()
  //       ).format('YYYY-MM-DD');
  //       navigate(`/calendar/day/${date}`);
  //       break;
  //     default:
  //       return;
  //   }
  // }, [navigate]);

  return (
    <MainContainer>
      <CalendarToolbar
      // currentDate={currentDate}
      // setCurrentDate={setCurrentDate}
      // format={format}
      // setFormat={setFormat}
      />
      <Outlet />
    </MainContainer>
  );
};

export default CalendarPage;
