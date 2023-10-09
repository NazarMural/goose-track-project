import { CloseBtn } from './CloseBtn.styled';
import PropTypes from 'prop-types';
import sprite from '../../../assets/images/icons/icons.svg';

export const CloseSideBarBtn = ({ removeSideBar }) => {
  return (
    <CloseBtn onClick={removeSideBar}>
      <svg>
        <use xlinkHref={`${sprite}#icon-x-close`} />
      </svg>
    </CloseBtn>
  );
};

CloseSideBarBtn.propTypes = {
  removeSideBar: PropTypes.func,
};
