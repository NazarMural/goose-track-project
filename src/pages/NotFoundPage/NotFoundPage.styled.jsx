import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { desktop, min, tablet } from 'styles/media';

export const ErrorWrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--page-bg-color);
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    height: 150px;
    width: 252px;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 264px;

    ${min(tablet)} {
        height: 250px;
        width: 503px;
        margin-top: 323px;
    }

    ${min(desktop)} {
        height: 250px;
        width: 503px;
        margin-top: 262px;
    }
`;

export const Text = styled.p`
    padding: 0;
    margin: 0;
    color: var(--accent-color);
    font-weight: 700;
    font-size: 100px;
    line-height: 1.5;

    ${min(tablet)} {
        font-size: 200px;
        line-height: 1.25;
    }
`;

export const Img = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    width: 81px;
    height: 188px;
    transform: translate(-50%, -50%);

    ${min(tablet)} {
        display: block;
        max-width: 100%;
        width: 278px;
        height: 414px;
        transform: translate(-50%, -50%);
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 246px;

    ${min(tablet)} {
        width: 410px;
        margin-bottom: 247px;
    }
    ${min(desktop)} {
        margin-bottom: 184px;
    }
`;

export const Title = styled.p`
    color: rgba(17, 17, 17, 0.7);
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28;
    margin-bottom: 24px;

    ${min(tablet)} {
        margin-top: 80px;
    }
`;

export const Btn = styled(Link)`
    padding: 16px 48px;
    border-radius: 16px;
    background-color: var(--accent-color);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    color: var(--invert-text-color);
    font-weight: 600;
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: -0.36px;
    text-decoration: none;

    &:focus,
    &:hover {
        background-color: var(--btn-bg-hover);
    }
`;