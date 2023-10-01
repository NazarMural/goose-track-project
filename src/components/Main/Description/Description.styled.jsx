import styled from '@emotion/styled';
import { mobile, tablet, min, desktop, max } from 'styles/media';

export const DescriptionContainer = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
`;

export const DescriptionContent = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 64px 20px;
  margin-top: 0;
  background-color: var(--primary-bg-color);

  & > li:nth-of-type(2) > :first-of-type {
    margin-left: auto;
  }

  ${min(tablet)} {
    padding: 64px 32px;
  }
  ${min(desktop)} {
  padding: 64px 128px;
  // margin-left: auto;
  // margin-right: auto;
  }
`;

export const DescriptionBlock = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  ${min(desktop)} {
    flex-direction: row;
    gap: 228px;
    margin-left: auto;

    &:nth-of-type(2) {
      flex-direction: row-reverse;
      margin-right: auto;
      margin-left: 0;
      

    }
  }
`;

export const DescriptionInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${min(tablet)} {
    max-width: 275px;
  }
`;

export const DescriptionNumber = styled.h2`
  display: flex;
  font-size: 80px;
  font-weight: 700;
  line-height: 0.8;
  letter-spacing: -4px;
  color: var(--accent-color);
  margin: 0;
`;

export const DescriptionAccent = styled.h2`
  display: inline-block;
  // max-width: 214px;
  width: fit-content;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 8px 18px;
  // align-items: center;
  // justify-content: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  color: var(--accent-color);
  text-transform: uppercase;
  border-radius: 44px;
  background-color: var(--auth-bg-color);

  ${min(tablet)} {
    line-height: 1.1;
    padding: 6px 18px;
    max-width: 264px;
    font-size: 40px;
  }
  ${max(mobile)} {
    font-size: 1rem;
  }
`;

export const DescriptionName = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  color: var(--main-page-title);
  text-transform: uppercase;
  margin-top: 8px;
  margin-bottom: 0;

  ${min(tablet)} {
    line-height: 1.1;
    font-size: 40px;
  }
`;

export const DescriptionText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--main-page-text-color);
  margin-bottom: 40px;
  margin-top: 14px;

  ${min(tablet)} {
    margin-top: 24px;
  }
`;

export const DescritpionImage = styled.picture`
  width: 335px;
  height: 457px;

  ${min(tablet)} {
    width: 704px;
    height: 700px;
  }

  ${min(desktop)} {
    width: 604px;
    height: 700px;
  }

  ${max(mobile)}{
    width: 100%;
    height: auto;
  }
`;

export const DescriptionImageImg = styled.img`
  /* Звичайне зображення */
  width: 100%;
  height: 100%;
`;
