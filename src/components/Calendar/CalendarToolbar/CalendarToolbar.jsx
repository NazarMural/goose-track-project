// import sprite from '../../../assets/images/icons/icons.svg';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  Date,
  DateContainer,
  DateWrapper,
  Toggle,
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
  const month = moment(currentDate).format('MMMM-YYYY');
  const day = moment(currentDate).format('YYYY-MM-DD');

  const handleClick = format => {
    setCurrentDate(moment(currentDate).add(1, format));
  };

  const handleClickBack = format => {
    setCurrentDate(moment(currentDate).subtract(1, format));
  };

  const handleChangeType = e => {
    switch (e.currentTarget.textContent) {
      case 'Month':
        setFormat('month');
        break;
      case 'Day':
        setFormat('day');
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="#DCE3E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Toggle>
          </Link>
          <Link
            to={format === 'month' ? `month/${month}` : `day/${day}`}
            onClick={() => handleClick(format)}
          >
            <Toggle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="#343434"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
