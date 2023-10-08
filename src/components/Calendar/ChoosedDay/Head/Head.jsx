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
import { setDay } from 'helpers/setDay';

const Head = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isSelected, setIsSelected] = useState('');

  const { currentDay } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const currentDaySlice = currentDay.split('-').slice(2).join('');
    [...Array(7)].map((_, idx) => {
      const dayIdx = setDay(currentDay)
        .startWeek.day(idx + 1)
        .format('DD');
      if (dayIdx === currentDaySlice) {
        setIsSelected(idx);
      }
      return null;
    });
  }, [currentDay]);

  const onChangeDay = date => {
    const formatDate = date.format('YYYY-MM-DD');
    localStorage.setItem('date', formatDate);
    navigate('../', { relative: `${formatDate}` });
  };

  return (
    <HeadContainer isSelected={isSelected}>
      {[...Array(7)].map((_, idx) => (
        <HeadCell
          onClick={() => onChangeDay(moment(currentDay).day(idx + 1))}
          key={idx}
        >
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
              {setDay(currentDay)
                .startWeek.day(idx + 1)
                .format('D')}
            </DayWeekText>
          </DayWeekContainer>
        </HeadCell>
      ))}
    </HeadContainer>
  );
};

export default Head;
