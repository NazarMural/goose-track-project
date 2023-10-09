import sprite from '../../../assets/images/icons/icons.svg';
import { BurgerButtonEl } from './BurgerBtn.styled';
import PropTypes from 'prop-types';

export const BurgerBtn = ({ addSideBar }) => {
  return (
    <BurgerButtonEl type="button" onClick={addSideBar}>
      <svg>
        <use xlinkHref={`${sprite}#icon-menu_40px`} />
      </svg>
    </BurgerButtonEl>
  );
};

BurgerBtn.propTypes = {
  addSideBar: PropTypes.func,
};
