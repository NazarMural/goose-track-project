import styled from '@emotion/styled';
import { tablet, min } from 'styles/media';

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
  color: #343434;
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
  width: 44px;
  height: 44px;
  border-radius: 44px;
  border: 1.8px solid #3e85f3;

  background: ${props => (props.userAvatarUrl ? props.userAvatarUrl : '')},
    lightgray 50% / cover no-repeat;
`;
