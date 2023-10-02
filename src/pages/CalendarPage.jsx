import React from 'react';
import ChoosedMonth from 'components/Calendar/ChoosedMonth/ChoosedMonth';
import { MainContainer } from 'components/MainContainer/MainContainer';
import ChoosedDay from 'components/Calendar/ChoosedDay/ChoosedDay';
// import { CalendarTable } from 'components/Calendar/ChoosedMonth/CalendarTable/CalendarTable';

const CalendarPage = () => {
  return (
    <MainContainer>
      {/* <ChoosedMonth /> */}
      <ChoosedDay />
    </MainContainer>
  );
};

export default CalendarPage;
