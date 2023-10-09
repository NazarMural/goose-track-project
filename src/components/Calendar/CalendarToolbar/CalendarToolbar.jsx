import sprite from '../../../assets/images/icons/icons.svg';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import {
  Date,
  DateContainer,
  DateWrapper,
  Toggle,
  ToggleIcon,
  ToggleWrapper,
  Toolbar,
  TypeWrapper,
} from './CalendarToolbar.styled';
import { TypeLink } from './CalendarToolbar.styled';
import { useEffect, useState } from 'react';

const CalendarToolbar = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [format, setFormat] = useState('');
  const params = useParams();

  let paramsType;
  let paramsDate;

  if (params.currentDay) {
    paramsType = 'day';
    paramsDate = params.currentDay;
  }
  if (params.currentMonth) {
    paramsType = 'month';
    paramsDate = params.currentMonth;
  }

  const navigate = useNavigate();

  const month = moment(currentDate).format('YYYY-MM');
  const day = moment(currentDate).format('YYYY-MM-DD');

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

  const handleClick = () => {
    const date = moment(paramsDate).add(1, paramsType).format('YYYY-MM-DD');
    setCurrentDate(date);
    localStorage.setItem('date', date);
    const month = moment(date).format('YYYY-MM');
    const day = moment(date).format('YYYY-MM-DD');
    navigate(paramsType === 'month' ? `month/${month}` : `day/${day}`);
    if (params.currentDay) {
      setFormat('day');
    }
  };

  const handleClickBack = () => {
    const date = moment(paramsDate)
      .subtract(1, paramsType)
      .format('YYYY-MM-DD');
    localStorage.setItem('date', date);
    setCurrentDate(date);
    const month = moment(date).format('YYYY-MM');
    navigate(paramsType === 'month' ? `month/${month}` : `day/${date}`);
  };

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
      <DateContainer>
        <DateWrapper>
          <Date>
            {moment(paramsDate).format(
              paramsType === 'day' ? 'DD MMM YYYY' : 'MMMM YYYY'
            )}
          </Date>
        </DateWrapper>
        <ToggleWrapper>
          <div onClick={handleClickBack}>
            <Toggle>
              <ToggleIcon width="16" height="16">
                <use
                  xlinkHref={`${sprite}#icon-chevron-left`}
                  width={16}
                  height={16}
                />
              </ToggleIcon>
            </Toggle>
          </div>
          <div onClick={handleClick}>
            <Toggle>
              <ToggleIcon width="16" height="16">
                <use
                  xlinkHref={`${sprite}#icon-chevron-right`}
                  width={16}
                  height={16}
                />
              </ToggleIcon>
            </Toggle>
          </div>
        </ToggleWrapper>
      </DateContainer>
      <TypeWrapper>
        <TypeLink to={`month/${month}`} onClick={handleChangeType}>
          Month
        </TypeLink>
        <TypeLink to={`day/${day}`} onClick={handleChangeType}>
          Day
        </TypeLink>
      </TypeWrapper>
    </Toolbar>
  );
};

export default CalendarToolbar;
