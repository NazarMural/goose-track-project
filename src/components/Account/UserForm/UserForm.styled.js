import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Container = styled.div`
  width: 1087px;
  height: 752px;
  border-radius: 16px;
  background-color: var(--primary-bg-color);
`;
export const UserContainer = styled.div`
  display: flex;
  margin-bottom: 44px;
  flex-direction: column;
  align-items: center;
`;
export const AvatarWrapper = styled.div`
  position: relative;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  margin: 60px 0 20px;
  border: solid 2px var(--accent-color);
`;
export const AddAvatarButton = styled.button`
  position: absolute;
  bottom: -8px;
  right: 24px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: var(--accent-color);
`;
export const AddAvatar = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: var(--primary-bg-color);
`;
export const UserAvatar = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  fill: rgba(62, 133, 243, 0.18);
`;
export const UserName = styled.p`
  color: var(--secondary-text-color);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  margin: 0 0 8px 0;
`;
export const UserStatus = styled.p`
  margin: 0;
  color: var(--secondary-text-color);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;
export const AddUserForm = styled(Form)`
  position: relative;
  margin: 0 auto;
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  justify-content: center;
  width: 758px;
  gap: 24px 50px;
`;
export const FormField = styled(Field)`
  ::-webkit-calendar-picker-indicator {
    margin: 0 10px 0;
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
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  width: 262px;
  height: 48px;
  border: none;
  padding: 10px 0px;
  border-radius: 16px;
  color: var(--primary-bg-color);
  background-color: var(--btn-bg-color);
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

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

export const ChevronDown = styled.svg`
  position: absolute;
  top: 18px;
  right: 14px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  pointer-events: none;
  fill: var(--primary-text-color);
`;
export const Span = styled.div`
  position: relative;
`;
