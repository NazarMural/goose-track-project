import { CloseBtn } from './CloseBtn.styled';
import sprite from '../../../assets/images/icons/icons.svg';

export const CloseSideBarBtn = ({ removeSideBar }) => {
  return (
    <CloseBtn onClick={removeSideBar}>
      <svg>
        <use
          xlinkHref={`${sprite}#icon-x-close`}
          // width={24}
          // height={24}
          stroke="var(--primary-text-color)"
          fill="transparent"
        />
      </svg>
    </CloseBtn>
  );
};
