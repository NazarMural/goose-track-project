import React from 'react';
import ChoosedMonth from 'components/Calendar/ChoosedMonth/ChoosedMonth';
import { MainContainer } from 'components/MainContainer/MainContainer';

const CalendarPage = () => {
  return (
    <MainContainer>
      <ChoosedMonth />
    </MainContainer>
  );
};

export default CalendarPage;
