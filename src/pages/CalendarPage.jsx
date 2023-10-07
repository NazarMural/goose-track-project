import React, { useEffect } from 'react';
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
  const format = localStorage.getItem('type');
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
        globalFormat={format}
        // setFormat={setFormat}
      />
      <Outlet />
    </MainContainer>
  );
};

export default CalendarPage;
