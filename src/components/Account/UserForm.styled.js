import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Container = styled.div`
  width: 1087px;
  height: 752px;
  border-radius: 16px;
  background-color: var(--primary-bg-color);
`;
export const AvatarContainer = styled.div`
  display: flex;
  margin: 60px 0 44px;
  flex-direction: column;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 124px;
  height: 124px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: solid 2px var(--accent-color);
`;
export const AvatarName = styled.p`
  color: var(--secondary-text-color);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  margin: 0 0 8px 0;
`;
export const AvatarStatus = styled.p`
  margin: 0;
  color: var(--secondary-text-color);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;
export const AddUserForm = styled(Form)`
  margin: 0 auto;
  position: relative;
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  justify-content: center;
  width: 758px;
  gap: 24px 50px;
`;
export const FormField = styled(Field)`
  ::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0;
  }
  width: 334px;
  padding: 14px 0px 14px 18px;
  border-color: var(--input-border-color);
  border-radius: 8px;
  color: var(--primary-text-color);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  &focus {
    border-color: var(--input-border-color-focus);
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--primary-text-color);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const Button = styled.button`
  display: flex;
  width: 262px;
  height: 48px;
  border: none;
  padding: 10px 0px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  background-color: var(--btn-bg-color);
  &:hover {
    background-color: var(--btn-bg-hover);
  }
`;
export const ButtonContainer = styled.div`
  position: absolute;
  top: 352px;
  right: 247px;
  display: flex;
  justify-content: center;
`;
export const ChangeDate = styled.span`
  position: absolute;
  top: 141px;
  right: 420px;
  cursor: pointer;
  pointer-events: none;
`;
