import sprite from '../../../images/icons/icons.svg';
import { ThemeBtn } from './ThemeToggle.styled';

export const ThemeToggler = () => {
  return (
    <ThemeBtn type="button">
      <svg>
        <use xlinkHref={`${sprite}#icon-moon`} />
      </svg>
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
