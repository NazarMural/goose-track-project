import styled from '@emotion/styled';
import { tablet, min, mobile, max } from 'styles/media';

export const FormContainer = styled.form`
  max-width: 468px;
  padding: 28px 20px 29px 20px;

  ${min(tablet)} {
    padding: 32px;
  }
`;

export const LabelText = styled.label`
  display: flex;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;
  color: #343434cc;
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  max-width: 100%;
  ${min(tablet)} {
    margin-top: 24px;
  }
`;

export const CommentText = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 12px 14px;
  border: none;
  border-radius: 8px;
  background: #f6f6f6;
  resize: none;
  box-sizing: border-box;
  ${min(mobile)} {
    width: 295px;
  }
  ${min(tablet)} {
    width: 404px;
    height: 127px;
    padding: 14px 18px;
  }

  &::placeholder {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28;
    color: var(--secondary-text-color);
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const SaveButton = styled.button`
  display: flex;
  border: none;
  border-radius: 8px;
  padding: 12px 56px;
  margin-top: 14px;
  outline: none;
  background-color: var(--btn-bg-color);
  color: var(--btn-text-color);
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  cursor: pointer;
  justify-content: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: var(--btn-bg-hover);
  }
  ${max(mobile)} {
    width: 50%;
    padding: 12px 5px;
  }
  ${min(tablet)} {
   
    width: 198px;
`;

export const CancelButton = styled.button`
  display: flex;
  border: none;
  border-radius: 8px;
  padding: 12px 47.5px;
  margin-top: 14px;
  outline: none;
  background-color: var(--review-btn-cancel-bg);
  color: var(--secondary-text-color);
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  cursor: pointer;
  justify-content: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: var(--switch-type-bg-active);
  }
  ${max(mobile)} {
    width: 50%;
    padding: 12px 5px;
  }
  ${min(tablet)} {
    width: 198px;
  }
`;
