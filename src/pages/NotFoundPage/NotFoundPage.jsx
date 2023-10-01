import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
    ErrorWrapper, 
    Content, 
    Text, 
    Img, 
    Info, 
    Title, 
    Btn,
} from './NotFoundPage.styled';

import desk404x1 from '../../assets/images/notFoundPage/desktop404.png';
import desk404x2 from '../../assets/images/notFoundPage/desktop404@2x.png';
import tab404x1 from '../../assets/images/notFoundPage/tablet404.png';
import tab404x2 from '../../assets/images/notFoundPage/tablet404@2x.png';
import mob404x1 from '../../assets/images/notFoundPage/mobile404.png';
import mob404x2 from '../../assets/images/notFoundPage/mobile404@2x.png';

const notFoundPage = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            navigate('/');
        }
    }, [countdown, navigate]);

    return (
        <ErrorWrapper>
            <Content>
                <Text>4</Text>
                <Img
                    srcSet={`${desk404x1} 1440w, ${desk404x2} 2880w, ${tab404x1} 768w, ${tab404x2} 1536w, ${mob404x1} 375, ${mob404x2} 750w,`}
                    src={mob404x1}
                    alt="goose"
                />
                <Text>4</Text>
            </Content>
            <Info>
                <Title>
                    We’re sorry, the page you requested could not be found. Please go back to the homepage.
                </Title>
                <Btn to="/">Back to home</Btn>
            </Info>
        </ErrorWrapper>
    );
};

export default notFoundPage;