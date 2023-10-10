import sprite from '../../../assets/images/icons/icons.svg';
import {MessageText, TasksIconStatus} from './TaskValidateMessage.styled';

export const TaskValidateMessage = ({ errors, touched, field = '' }) => {
  return (
    <>
      {touched && (
        <>
          <MessageText error={errors}>{errors || `CORRECT ${field}`}</MessageText>
          <TasksIconStatus error={errors}>
            <use xlinkHref={`${sprite}${errors ? '#icon-error' : '#icon-done'}`} />
          </TasksIconStatus>
        </>
      )}
    </>
  );
};