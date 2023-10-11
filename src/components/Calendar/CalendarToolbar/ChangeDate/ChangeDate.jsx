import { useNavigate, useParams } from 'react-router';
import sprite from 'assets/images/icons/icons.svg';
import moment from 'moment';
import { Date, DateContainer, DateWrapper, Toggle, ToggleIcon, ToggleWrapper } from './ChangeDate.styled';

const ChangeDate = () => {
  const params = useParams();
  const navigate = useNavigate();

  let paramsType;
  let paramsDate;

  if (params.currentDay) {
    paramsType = 'day';
    paramsDate = params.currentDay;
    localStorage.setItem('type', 'day');
  }
  if (params.currentMonth) {
    paramsType = 'month';
    paramsDate = params.currentMonth;
    localStorage.setItem('type', 'month');
  }

  const handleClick = () => {
    const date = moment(paramsDate).add(1, paramsType).format('YYYY-MM-DD');

    localStorage.setItem('date', date);
    const month = moment(date).format('YYYY-MM');
    const day = moment(date).format('YYYY-MM-DD');
    navigate(paramsType === 'month' ? `month/${month}` : `day/${day}`);
  };

  const handleClickBack = () => {
    const date = moment(paramsDate)
      .subtract(1, paramsType)
      .format('YYYY-MM-DD');
    localStorage.setItem('date', date);
    const month = moment(date).format('YYYY-MM');
    navigate(paramsType === 'month' ? `month/${month}` : `day/${date}`);
  };

  return (
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
  );
};

export default ChangeDate;
