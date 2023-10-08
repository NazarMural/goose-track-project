import styled from '@emotion/styled';
import { tablet, min, desktop } from 'styles/media';

export const UserInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: 18px;
  ${min(tablet)} {
    gap: 14px;
    margin-left: 24px;
  }
`;

export const UserName = styled.p`
  color: var(--name-color);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  ${min(tablet)} {
    font-size: 18px;
  }
`;

export const UserAvatarThumb = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  border: 1.8px solid #3e85f3;
  overflow: hidden;
  border-radius: 50%;
`;

export const UserImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const UserAvatar = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
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
    width: 24px;
    height: 24px;
    fill: #3e85f32e;
    .dark & {
      fill: #ffffff2e;
    }
  }
`;
