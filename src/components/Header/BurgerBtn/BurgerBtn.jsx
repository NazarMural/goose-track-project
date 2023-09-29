import sprite from '../../../images/icons/icons.svg';
import { BurgerButtonEl } from './BurgerBtn.styled';
export const BurgerBtn = () => {
  return (
    <BurgerButtonEl type="button">
      <svg>
        <use xlinkHref={`${sprite}#icon-burger`} />
      </svg>
    </BurgerButtonEl>
  );
};
