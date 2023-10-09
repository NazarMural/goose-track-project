import styled from '@emotion/styled';
import { tablet, min, mobile, max } from 'styles/media';

export const FormContainer = styled.form`
  max-width: 468px;
  padding: 28px 20px 29px 20px;
  .dark & {
    background-color: var(--main-page-title);
    border: 1px solid rgba(220, 227, 229, 0.8);
   box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
    border-radius: 8px;
  }

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
  .dark & {
    color: var(--user-label-color);
  }
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  max-width: 100%;
  ${min(tablet)} {
    margin-top: 24px;
  }
`;

export const CommentText = styled.textarea`
  width: 295px;
  height: 130px;
  padding: 12px 14px;
  border: none;
  border-radius: 8px;
  background: #f6f6f6;
  resize: none;
  box-sizing: border-box;
  outline: none;
  font-weight: 600;

  .dark & {
    border: 1px solid var(--calendar-grid-border);
    background: transparent;
    color: var(--review-btn-cancel-color);
  }

  ${max(mobile)} {
    width: 100%;
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

    .dark & {
      color: var(--review-btn-cancel-color);
    }
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
  width: 144px;
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
  width: 143px;
  cursor: pointer;
  justify-content: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: var(--switch-type-bg-active);
  }
  .dark & {
    background-color: var(--primary-bg-color);
    color: var(--review-btn-cancel-color);
  }
  ${max(mobile)} {
    width: 50%;
    padding: 12px 5px;
  }
  ${min(tablet)} {
    width: 198px;
  }
`;

export const EditButton = styled(SaveButton)`
  padding: 12px 59px;
`;

export const IconContainer = styled.div`
  display: flex;
  position: absolute;
  top: 88px;
  right: 20px;
  gap: 8px;
  ${min(tablet)} {
    right: 32px;
  }
`;

export const IconEditBox = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // border: none;
  // border-radius: 50%;
  // background-color: var(--icon-edit-bg);
`;
export const ButtonEdit = styled.button`
  display: flex;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: var(--icon-edit-bg);
  border: none;
  padding: 7px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :active,
  :focus {
    background-color: var(--accent-color);
  }

  :hover {
    > svg {
      stroke: var(--btn-text-color);
    }
  }

  :focus {
    > svg {
      stroke: var(--btn-text-color);
    }
  }
`;
export const IconEdit = styled.svg`
  width: 100%;
  height: 100%;
  stroke: var(--accent-color);
  fill: none;

  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IconDel = styled(IconEdit)`
  stroke: var(--icon-delete-color);
`;

export const ButtonDel = styled(ButtonEdit)`
  background-color: #ee3d6565;

  :hover,
  :active {
    background-color: var(--icon-delete-bg);
  }
  :hover {
    > svg {
      stroke: var(--icon-delete-color);
    }
  }

  :focus {
    > svg {
      stroke: var(--icon-delete-color);
    }
  }
`;
