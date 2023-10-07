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
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchTasksOperation } from 'redux/tasks/operations';

// {
//   // currentDate,
//   // setCurrentDate,
//   // format,
//   // setFormat,
// }
const CalendarToolbar = () => {
  const [currentDate, setCurrentDate] = useState(
    localStorage.getItem('date') || moment().format('YYYY-MM-DD').toString()
  );

  // const [tasks, setTasks] = useState([]);

  // const month = moment(currentDate).format('YYYY-MM');
  // const day = moment(currentDate).format('YYYY-MM-DD');
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // console.log(month);
  // localStorage.getItem('date') || moment().format('YYYY-MM-DD').toString()
  const [format, setFormat] = useState(localStorage.getItem('type')); //|| 'month');
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

  // useEffect(() => {
  //   // Зчитуємо дані з localStorage
  //   const storedDate = localStorage.getItem('date');
  //   const storedType = localStorage.getItem('type');

  //   // Встановлюємо значення лише після завершення зчитування
  //   if (storedDate) {
  //     setCurrentDate(storedDate);
  //   } else {
  //     // Якщо дані відсутні в localStorage, встановлюємо значення за замовчуванням
  //     setCurrentDate(moment().format('YYYY-MM-DD'));
  //   }

  //   if (storedType) {
  //     setFormat(storedType);
  //   } else {
  //     setFormat('month');
  //   }
  // }, []);

  const handleClick = format => {
    console.log(currentDate);

    localStorage.setItem('date', currentDate);
    const date = moment(currentDate).add(1, format).format('YYYY-MM-DD');
    setCurrentDate(date);
    // setTimeout(() => {
    //   localStorage.setItem('date', date);
    // }, 1000);
    console.log(currentDate);
    console.log(date === currentDate);
    // let address;
    // console.log(month);
    // if (format === 'month') {
    //   address = `/calendar/month/${month}`;
    // } else {
    //   address = `day/${day}`;
    // }
    // navigate(address);
  };

  const handleClickBack = format => {
    localStorage.setItem('date', currentDate);
    const date = moment(currentDate).subtract(1, format).format('YYYY-MM-DD');
    setCurrentDate(date);
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
            {moment(localStorage.getItem('date')).format(
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
