import styled from '@emotion/styled';
import { min, tablet, desktop } from 'styles/media';
export const UserContainer = styled.div`
  margin: 0 auto;
  display: flex;
  margin-bottom: 40px;
  max-width: 299px;
  flex-direction: column;
  align-items: center;
  ${min(tablet)} {
    max-width: 704px;
    margin-bottom: 66px;
  }
  ${min(desktop)} {
    max-width: 1087px;
    display: flex;
    margin-bottom: 44px;
    flex-direction: column;
    align-items: center;
  }
`;
export const AvatarWrapper = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin: -31px 0 18px;
  border: solid 2px var(--accent-color);
  ${min(tablet)} {
    margin: 40px 0 20px;
  }
  ${min(desktop)} {
    position: relative;
    width: 124px;
    height: 124px;
    border-radius: 50%;
    margin: 60px 0 20px;
    border: solid 2px var(--accent-color);
  }
`;
export const AddAvatarButton = styled.button`
  position: absolute;
  bottom: -6px;
  right: 14px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  background-color: var(--accent-color);
  cursor: pointer;
  ${min(tablet)} {
  }
  ${min(desktop)} {
    position: absolute;
    bottom: -8px;
    right: 24px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    background-color: var(--accent-color);
    cursor: pointer;
  }
`;
export const AddAvatar = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  fill: transparent;
  stroke: var(--primary-bg-color);
  .dark & {
    stroke: var(--primary-text-color);
  }
  ${min(tablet)} {
  }
  ${min(desktop)} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    fill: transparent;
    stroke: var(--primary-bg-color);
    .dark & {
      stroke: var(--primary-text-color);
    }
  }
`;
export const UserAvatar = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  fill: #3e85f32e;
  .dark & {
    fill: #ffffff2e;
  }
  ${min(tablet)} {
  }
  ${min(desktop)} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
    fill: #3e85f32e;
    .dark & {
      fill: #ffffff2e;
    }
  }
`;
export const UserName = styled.p`
  color: var(--secondary-text-color);
  font-family: Inter;
  font-size: 14px;

  font-weight: 700;
  line-height: 18px;
  margin: 0 0 4px 0;
  .dark & {
    color: var(--primary-text-color);
  }
  ${min(desktop)} {
    color: var(--secondary-text-color);
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    margin: 0 0 8px 0;
    .dark & {
      color: var(--primary-text-color);
    }
  }
`;
export const UserStatus = styled.p`
  margin: 0;
  color: var(--secondary-text-color);
  font-family: Inter;
  font-size: 12px;

  font-weight: 600;
  line-height: 14px;
  .dark & {
    color: var(--user-label-color);
  }
  ${min(desktop)} {
    margin: 0;
    color: var(--secondary-text-color);
    font-family: Inter;
    font-size: 14px;

    font-weight: 600;
    line-height: 18px;
    .dark & {
      color: var(--user-label-color);
    }
  }
`;
