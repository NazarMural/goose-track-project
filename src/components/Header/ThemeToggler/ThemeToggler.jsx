import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/images/icons/icons.svg';
import { ThemeBtn } from './ThemeToggle.styled';
import { setTheme } from 'redux/theme/themeSlice';
import { selectTheme } from 'redux/theme/selectors';
import { THEMES } from 'constants/theme/themes';
import { useEffect } from 'react';
// import { useEffect } from 'react';

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
    // const r = localStorage.getItem('persist:theme');
    dispatch(
      setTheme(curentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
    );

    document.documentElement.classList.toggle('dark');
  };
  return (
    <ThemeBtn type="button" onClick={handleThemeClick}>
      {curentTheme === THEMES.LIGHT ? (
        <svg>
          <use xlinkHref={`${sprite}#icon-sun`} />
        </svg>
      ) : (
        <svg>
          <use xlinkHref={`${sprite}#icon-moon`} />
        </svg>
      )}
    </ThemeBtn>
  );
};

// по спрайту. я в компонент, де треба юзати імпортую цей файл

// import sprite from '../../../images/icons/icons.svg';

// і в місці, де треба вставляти прописую

//  <IconDone>
//         <use xlinkHref={`${sprite}#icon-Done`} width={40} height={40} />
//       </IconDone>

// окремо в файлі стилів

// export const IconDone = styled.svg`
//   margin-top: 10px;
//   margin-left: 500px;
//   stroke: pink;
//   height: 40px;
//   width: 40px;
// `;
