import sprite from '../../../assets/images/icons/icons.svg';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  Date,
  DateContainer,
  DateWrapper,
  Toggle,
  ToggleIcon,
  ToggleWrapper,
  Toolbar,
  Type,
  TypeWrapper,
} from './CalendarToolbar.styled';
import { TypeLink } from './CalendarToolbar.styled';

const CalendarToolbar = ({
  currentDate,
  setCurrentDate,
  format,
  setFormat,
}) => {
  const month = moment(currentDate).format('YYYY-MM');
  const day = moment(currentDate).format('YYYY-MM-DD');

  const handleClick = format => {
    const date = moment(currentDate).add(1, format).format('YYYY-MM-DD');
    setCurrentDate(date);
    localStorage.setItem('date', date);
  };

  const handleClickBack = format => {
    const date = moment(currentDate).subtract(1, format).format('YYYY-MM-DD');
    setCurrentDate(date);
    localStorage.setItem('date', date);
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
            {moment(currentDate).format(
              format === 'day' ? 'DD MMM YYYY' : 'MMMM YYYY'
            )}
          </Date>
        </DateWrapper>
        <ToggleWrapper>
          <Link
            to={format === 'month' ? `month/${month}` : `day/${day}`}
            onClick={() => handleClickBack(format)}
          >
            <Toggle>
              <ToggleIcon width="16" height="16">
                <use
                  xlinkHref={`${sprite}#icon-chevron-left`}
                  width={16}
                  height={16}
                />
              </ToggleIcon>
            </Toggle>
          </Link>
          <Link
            to={format === 'month' ? `month/${month}` : `day/${day}`}
            onClick={() => handleClick(format)}
          >
            <Toggle>
              <ToggleIcon width="16" height="16">
                <use
                  xlinkHref={`${sprite}#icon-chevron-right`}
                  width={16}
                  height={16}
                />
              </ToggleIcon>
            </Toggle>
          </Link>
        </ToggleWrapper>
      </DateContainer>
      <TypeWrapper>
        <Type>
          <TypeLink to={`month/${month}`} onClick={handleChangeType}>
            Month
          </TypeLink>
        </Type>
        <Type>
          <Link to={`day/${day}`} onClick={handleChangeType}>
            Day
          </Link>
        </Type>
      </TypeWrapper>
    </Toolbar>
  );
};

export default CalendarToolbar;
