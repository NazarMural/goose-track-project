import { useMediaQuery } from 'react-responsive';
import moment from 'moment';
import {
  DayWeekContainer,
  DayWeekText,
  HeadCell,
  HeadContainer,
  NameWeek,
} from './Head.styled';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const Head = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isSelected, setIsSelected] = useState('');
  const { currentDay } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const currentDaySlice = currentDay.split('-').slice(2).join('');
    [...Array(7)].filter((_, idx) => {
      const test = moment()
        .day(idx + 1)
        .format('DD');
      if (test === currentDaySlice) {
        setIsSelected(idx);
      }
    });
  }, [currentDay]);

  const onChangeDay = date => {
    const formatDate = date.format('YYYY-MM-DD');
    // navigate(`day/${formatDate}`);
  };

  return (
    <HeadContainer isSelected={isSelected}>
      {[...Array(7)].map((_, idx) => (
        <HeadCell onClick={() => onChangeDay(moment().day(idx + 1))} key={idx}>
          <NameWeek>
            {isMobile
              ? moment()
                  .day(idx + 1)
                  .format('ddd')
                  .charAt(0)
              : moment()
                  .day(idx + 1)
                  .format('ddd')}
          </NameWeek>
          <DayWeekContainer>
            <DayWeekText>
              {moment()
                .day(idx + 1)
                .format('D')}
            </DayWeekText>
          </DayWeekContainer>
        </HeadCell>
      ))}
    </HeadContainer>
  );
};

export default Head;
