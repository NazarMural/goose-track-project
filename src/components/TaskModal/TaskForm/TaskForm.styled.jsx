import styled from '@emotion/styled';
import { Field } from 'formik';
import { min, tablet } from 'styles/media';


export const FormContainer = styled.div`
    position: relative;
    width: 303px;
    padding: 48px 18px 40px;
    border-radius: 8px;
    border: 1px solid rgba(220, 227, 229, 0.8);
    background-color: var(--task-popup-bg);
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

    ${min(tablet)} {
        width: 396px;
        padding: 40px 28px;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 14px;
    right: 14px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const CloseIcon = styled.svg`
    width: 24px;
    height: 24px;
    stroke: rgba(17, 17, 17, 0.1);
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: rgba(52, 52, 52, 1);
    font-weight: 500;
    font-size: 12px;
    line-height: 1.16;
    position: relative;
`;

export const TitleField = styled(Field)`
    width: 267px;
    height: 42px;
    flex-shrink: 0;
    padding: 12px 14px;
    /* margin-bottom: 16px; */
    border-radius: 8px;
    border: none;
    background-color: rgba(246, 246, 246, 1);
    color: rgba(52, 52, 52, 1);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28;
    cursor: pointer;

    ${min(tablet)} {
        height: 46px;
        width: 340px;
        padding: 14px 18px;
        /* margin-bottom: 18px; */
    }

    &::placeholder {
        opacity: 1;
        color: var(--task-popup-color-text);
        font-size: 14px;
        line-height: 1.28;
    }
`;

export const FieldContainer = styled.div`
    display: flex;
    gap: 14px;
    margin-bottom: 16px;

  ${min(tablet)} {
    margin-bottom: 28px;
  }
`;

export const TimeField = styled(Field)`
    width: 126px;
    height: 42px;
    flex-shrink: 0;
    padding: 12px 14px;
    /* margin-bottom: 16px; */
    border-radius: 8px;
    border: none;
    background-color: rgba(246, 246, 246, 1);
    color: rgba(52, 52, 52, 1);
    font-size: 14px;
    line-height: 1.28;
    &::-webkit-calendar-picker-indicator {
    opacity: 0;
    cursor: pointer;
    width: 32px;
}

    ${min(tablet)} {
        width: 163px;
        height: 46px;
        padding: 14px 18px;
        /* margin-bottom: 32px; */
        &::-webkit-calendar-picker-indicator {
        width: 60px;
    }
}
`;

export const PriorityContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
`;

export const PriorityLabel = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    gap: 6px;
    color: rgba(52, 52, 52, 1);
    font-size: 12px;
    line-height: 1.16;

    ${min(tablet)} {
        font-size: 14px;
        line-height: 1.16;
    }
`;

export const PriorityField = styled(Field)`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
`;

export const Blue = styled.svg`
    width: 10px;
    height: 10px;
`;
export const BlueLine = styled.svg`
    width: 10px;
    height: 10px;
`;

export const Orange = styled.svg`
    width: 10px;
    height: 10px;
`;

export const OrangeLine = styled.svg`
    width: 10px;
    height: 10px;
`;

export const Red = styled.svg`
    width: 10px;
    height: 10px;
`;

export const RedLine = styled.svg`
    width: 10px;
    height: 10px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 14px;
`;

export const OperationButton = styled.button`
    display: flex;
    width: 135px;
    height: 42px;
    padding: 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: none;
    background: var(--accent-color);
    color: var(--invert-text-color);
    text-align: center;
    font-size: 14px;
    line-height: 1.28;
    transition: background-color 250ms linear;

&:hover,
&:focus {
    background-color: var(--btn-bg-hover);
}

${min(tablet)} {
    width: 182px;
    height: 48px;
    padding: 10px 20px;;
    }
`;

export const AddIcon = styled.svg`
    width: 20px;
    height: 20px;
`;

export const EditIcon = styled.svg`
    width: 18px;
    height: 18px;
`;

export const CancelButton = styled.button`
    width: 118px;
    height: 42px;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: none;
    background-color: var(--task-btn-cancel);
    color: var(--primary-text-color);
    text-align: center;
    font-size: 14px;
    line-height: 1.28;
    transition: background-color 250ms linear;

&:hover,
&:focus {
    background-color: var(--btn-bg-hover);
    color: var(--task-popup-bg);
}

${min(tablet)} {
    width: 144px;
    height: 48px;
    }
`;

export const TitleFieldContainer = styled.div`
  margin-bottom: 16px;

  ${min(tablet)} {
    margin-bottom: 18px;
  }
`;