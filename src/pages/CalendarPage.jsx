import React, { useEffect } from 'react';
import { MainContainer } from 'components/MainContainer/MainContainer';
import CalendarToolbar from 'components/Calendar/CalendarToolbar/CalendarToolbar';
import { Outlet, useNavigate } from 'react-router';
import moment from 'moment';

const CalendarPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const month = moment().format('YYYY-MM').toString();
    navigate(`/calendar/month/${month}`);
  }, [navigate]);

  const format = localStorage.getItem('type') || 'month';
  useEffect(() => {
    const date =
      localStorage.getItem('date') || moment().format('YYYY-MM-DD').toString();

    const month = date.slice(0, -3);

    if (format === 'month') {
      navigate(`/calendar/month/${month}`);
    } else {
      navigate(`/calendar/day/${date}`);
    }

    localStorage.setItem('date', date);
    localStorage.setItem('type', format);
  }, [navigate, format]);

  return (
    <MainContainer>
      <CalendarToolbar />
      <Outlet />
    </MainContainer>
  );
};

export default CalendarPage;
