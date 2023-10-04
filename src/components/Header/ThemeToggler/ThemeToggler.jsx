import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/images/icons/icons.svg';
import { ThemeBtn } from './ThemeToggle.styled';
import { setTheme } from 'redux/theme/themeSlice';
import { selectTheme } from 'redux/theme/selectors';
import { THEMES } from 'constants/theme/themes';
import { useEffect } from 'react';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const curentTheme = useSelector(selectTheme);

  useEffect(() => {
    if (curentTheme === 'dark') {
      document.documentElement.classList.add('dark');
      return;
    }
    document.documentElement.classList.remove('dark');
  }, [curentTheme]);

  const handleThemeClick = () => {
    dispatch(
      setTheme(curentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
    );
    document.documentElement.classList.toggle('dark');
  };
  return (
    <ThemeBtn type="button" onClick={handleThemeClick}>
      {curentTheme === THEMES.LIGHT ? (
        <svg>
          <use xlinkHref={`${sprite}#icon-moon`} />
        </svg>
      ) : (
        <svg>
          <use xlinkHref={`${sprite}#icon-sun`} />
        </svg>
      )}
    </ThemeBtn>
  );
};

