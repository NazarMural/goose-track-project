import sprite from '../../../assets/images/icons/icons.svg';
import { Link, useNavigate } from 'react-router-dom';
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
import { useEffect, useState } from 'react';

const CalendarToolbar = ({ globalFormat }) => {
  const [currentDate, setCurrentDate] = useState('');
  //   localStorage.getItem('date') || moment().format('YYYY-MM-DD').toString()
  // );
  const [format, setFormat] = useState('');

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // console.log(month);
  // localStorage.getItem('date') || moment().format('YYYY-MM-DD').toString()
  // const [format, setFormat] = useState(localStorage.getItem('type'));
  //|| 'month');
  // ;
  // localStorage.getItem('type') || 'month';
  const month = moment(currentDate).format('YYYY-MM');
  const day = moment(currentDate).format('YYYY-MM-DD');
  // useEffect(() => {
  //   setCurrentDate(currentDate);
  //   // localStorage.setItem('date', currentDate);
  // }, [currentDate, setCurrentDate]);

  // useEffect(() => {
  //   (async () => {
  //     const month = moment(currentDate).format('YYYY-MM');
  //     const day = moment(currentDate).format('YYYY-MM-DD');
  //     const { payload } = await dispatch(fetchTasksOperation(month));
  //     setTasks(payload);
  //   })();

  //   // month = moment(currentDate).format('YYYY-MM');
  // }, [currentDate, dispatch]);

  useEffect(() => {
    // Зчитуємо дані з localStorage
    const storedDate = localStorage.getItem('date');
    const storedType = localStorage.getItem('type');

    // Встановлюємо значення лише після завершення зчитування
    if (storedDate) {
      setCurrentDate(storedDate);
    } else {
      // Якщо дані відсутні в localStorage, встановлюємо значення за замовчуванням
      setCurrentDate(moment().format('YYYY-MM-DD'));
    }

    if (storedType) {
      setFormat(storedType);
    } else {
      setFormat('month');
    }
  }, []);

  const handleClick = () => {
    const date = moment(currentDate).add(1, format).format('YYYY-MM-DD');
    setCurrentDate(date);
    localStorage.setItem('date', date);
    const month = moment(date).format('YYYY-MM');
    const day = moment(date).format('YYYY-MM-DD');
    navigate(globalFormat === 'month' ? `month/${month}` : `day/${day}`);
  };

  const handleClickBack = () => {
    const date = moment(currentDate).subtract(1, format).format('YYYY-MM-DD');
    localStorage.setItem('date', date);
    setCurrentDate(date);
    const month = moment(date).format('YYYY-MM');
    navigate(globalFormat === 'month' ? `month/${month}` : `day/${date}`);
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
