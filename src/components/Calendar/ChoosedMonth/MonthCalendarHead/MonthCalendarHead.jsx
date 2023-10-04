import { useMediaQuery } from 'react-responsive';
import moment from 'moment';

import { HeadCell, HeadWrapper } from './MonthCalendarHead.styled';

export const MonthCalendarHead = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  //   const day = moment().day(1).format('ddd');
  //   console.log(day);

  return (
    <HeadWrapper>
      {[...Array(7)].map((_, idx) => (
        <HeadCell
          key={idx}
          weekend={
            idx === 5 || idx === 6
              ? `var(--accent-color)`
              : `var(--primary-text-color)`
          }
        >
          {isMobile
            ? moment()
                .day(idx + 1)
                .format('ddd')
                .charAt(0)
            : moment()
                .day(idx + 1)
                .format('ddd')}
        </HeadCell>
      ))}
    </HeadWrapper>
  );
};
