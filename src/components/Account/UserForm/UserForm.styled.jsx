import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { min, tablet, desktop } from 'styles/media';
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
export const FormField = styled(Field)`
  ::-webkit-calendar-picker-indicator {
    margin: 0 10px 0;
    cursor: pointer;
    opacity: 0;
  }
  max-width: 283px;
  padding: 12px 0 12px 14px;
  margin-bottom: 18px;
  border: 1px solid var(--input-border-color);
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
  ${min(tablet)} {
    max-width: 354px;
  }
`;

export const ChevronDown = styled.svg`
  position: absolute;
  top: 36px;
  right: 11px;
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
  ${min(tablet)} {
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
