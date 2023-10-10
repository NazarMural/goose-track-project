import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { min, tablet, desktop } from 'styles/media';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
export const Container = styled.div`
  max-width: 335px;
  height: 653px;
  border-radius: 16px;
  background-color: var(--primary-bg-color);
  .dark & {
    background-color: var(--primary-bg-color);
  }
  ${min(tablet)} {
    max-width: 704px;
    height: 854px;
  }

  ${min(desktop)} {
    max-width: 1087px;
    height: 752px;
    background-image: none;
    border-radius: 16px;
    background-color: var(--primary-bg-color);
    .dark & {
      background-color: var(--primary-bg-color);
    }
  }
`;

export const AddUserForm = styled(Form)`
  max-width: 299px;
  height: 392px;
  margin: 0 auto;
  ${min(tablet)} {
    margin: 0 auto;
    max-width: 354px;
    height: 458px;
  }
  ${min(desktop)} {
    position: relative;
    max-width: 758px;
    height: 200px;
    margin: 0 auto;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
    justify-content: center;
    gap: 18px 50px;
  }
`;
export const FieldContainer = styled.div`
  position: relative;
  max-width: 283px;

  ${min(tablet)} {
    max-width: 334px;
  }
`;
export const FormField = styled(Field)`
  ::-webkit-calendar-picker-indicator {
    margin: 0 10px 0;
    cursor: pointer;
    opacity: 0;
  }
  max-width: 299px;
  padding: 12px 0 12px 14px;
  margin-bottom: 18px;
  border: 1px solid;
  border-color: ${({ errors, touched }) =>
    touched
      ? errors
        ? 'var(--error-color);'
        : 'var(--success-color);'
      : 'var(--input-border-color);'};
  border-radius: 8px;
  color: var(--primary-text-color);
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  &focus {
    border-color: var(--input-border-color-focus);
  }
  .dark & {
    background-color: var(--primary-bg-color);
    color: var(--primary-text-color);
    border-color: var(--calendar-grid-border);
  }

  ${min(tablet)} {
    max-width: 334px;
    padding: 14px 0 14px 18px;
    margin-bottom: 24px;
  }
  ${min(desktop)} {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    &focus {
      border-color: var(--input-border-color-focus);
    }
    .dark & {
      background-color: var(--primary-bg-color);
      color: var(--primary-text-color);
      border-color: var(--calendar-grid-border);
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--primary-text-color);
  font-family: Inter;
  font-size: 12px;
  line-height: 14px;
  .dark & {
    color: var(--user-label-color);
  }
  ${min(desktop)} {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--primary-text-color);
    font-family: Inter;
    font-size: 14px;
    line-height: 18px;
    .dark & {
      color: var(--user-label-color);
    }
  }
`;

export const Span = styled.div`
  position: relative;
  max-width: 299px;

  .react-datepicker__header {
    text-align: center;
    background-color: #3e85f3;
    border-bottom: 1px solid #fff;
    border-top-left-radius: 16px;
    padding: 8px 0;
    position: relative;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 16px;
  }

  .react-datepicker {
    background-color: #3e85f3;
    color: #000;
    border-radius: 16px;
    display: inline-block;
    position: relative;
  }

  .react-datepicker__navigation-icon::before {
    border-color: #fff;
  }
  .react-datepicker__current-month {
    margin-top: 0;
    color: #fff;
    font-weight: bold;
    font-size: 0.944rem;
  }
  .react-datepicker__day-name {
    color: #fff;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
  }

  .react-datepicker__day {
    cursor: pointer;
    color: #fff;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
    &:hover {
      border-radius: 50%;
      background-color: var(--datepicker-day-accent-bg-color);
      color: var(--datepicker-day-accent-text-color);
    }

    &--disabled {
      opacity: 0.35;
      cursor: default;

      &:hover {
        background-color: transparent;
        color: var(--date-color);
      }
    }
  }

  .react-datepicker__day--selected {
    border-radius: 50%;
    background-color: #fff;
    color: #3e85f3;
  }
  .react-datepicker__navigation {
    border-color: #fff;
  }
  ${min(tablet)} {
    max-width: 354px;
  }

  .react-datepicker__month-dropdown,
  .react-datepicker__year-dropdown,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__year-dropdown-container--select {
    padding: 10px 0;
    text-align: left;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: transparent;
  }

  .react-datepicker__month-select,
  .react-datepicker__year-select {
    background-color: var(--accent-color) !important;
    color: var(--datepicker-day-text-color);
    outline: none;
    border: none;

    & option {
      margin-bottom: 2px;
      display: inline-flex;
      font-size: 12px;
      min-height: 10px;
      line-height: 18px !important;
      display: block;
      height: 18px !important;
      padding: 0;
      align-self: flex-start;

      &:hover {
        background-color: var(--datepicker-day-accent-bg-color) !important;
        color: var(--datepicker-day-accent-text-color);
      }
    }
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__day--outside-month {
    color: transparent !important;
  }

  .weekend,
  .react-datepicker__day--weekend {
    color: #ffffff50;
  }

  .react-datepicker__day--disabled.react-datepicker__day--weekend {
    color: #ffffff;
  }

  .react-datepicker__day--selected.react-datepicker__day--weekend {
    color: var(--datepicker-day-accent-text-color);
  }
`;

export const ChevronDown = styled.svg`
  position: absolute;
  top: 36px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  pointer-events: none;
  fill: var(--primary-text-color);
  ${min(tablet)} {
    top: 38px;
  }
  ${min(desktop)} {
    top: 42px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 22px;

  ${min(desktop)} {
    position: absolute;
    top: 352px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Button = styled.button`
  width: 196px;
  height: 46px;
  border: none;
  cursor: pointer;
  padding: 10px 0px;
  border-radius: 16px;
  color: var(--primary-bg-color);
  background-color: var(--btn-bg-color);
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  &:hover {
    background-color: var(--btn-bg-hover);
  }
  .dark & {
    color: var(--primary-text-color);
  }

  ${min(desktop)} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    max-width: 262px;
    height: 48px;
    border: none;
    cursor: pointer;
    padding: 10px 0px;
    border-radius: 16px;
    color: var(--primary-bg-color);
    background-color: var(--btn-bg-color);

    &:hover {
      background-color: var(--btn-bg-hover);
    }
    .dark & {
      color: var(--primary-text-color);
    }
  }
`;
export const IconStatus = styled.svg`
  position: absolute;
  fill: ${({ error }) =>
    error ? 'var(--error-color)' : 'var(--success-color)'};
  height: 22px;
  width: 22px;
  right: ${({ birthday }) => (birthday ? '35px' : '14px')};
  top: 45px;
  transform: translateY(-50%);

  ${min(tablet)} {
    height: 24px;
    width: 24px;
    right: ${({ birthday }) => (birthday ? '39px' : '18px')};
  }
  ${min(desktop)} {
    top: 50px;
  }
`;
export const ErrorMessageText = styled.span`
  position: absolute;
  top: 70px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: ${({ error }) =>
    error ? 'var(--error-color)' : 'var(--success-color)'};
  ${min(tablet)} {
    top: 75px;
  }
  ${min(desktop)} {
    top: 80px;
  }
`;
export const Wrapper = styled(DatePicker)`
  width: 100%;
  color: white;
  padding: 12px 0 12px 14px;
  margin-bottom: 18px;
  border: 1px solid;
  width: 100%;
  border-color: ${({ errors, touched }) =>
    touched
      ? errors
        ? 'var(--error-color);'
        : 'var(--success-color);'
      : 'var(--input-border-color);'};
  border-radius: 8px;
  color: var(--primary-text-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  cursor: pointer;
  &focus {
    border-color: var(--input-border-color-focus);
  }
  .dark & {
    background-color: var(--primary-bg-color);
    color: var(--primary-text-color);
    border-color: var(--calendar-grid-border);
  }
`;
