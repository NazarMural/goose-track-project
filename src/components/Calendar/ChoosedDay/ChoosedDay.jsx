import {
  ButtonAddTask,
  ButtonAddTaskText,
  ContainerButtonAddTask,
  ContainerMain,
  ContainerSecond,
  IconButtonAddTask,
} from './ChoosedDay.styled';

import sprite from '../../../assets/images/icons/icons.svg';
import Title from './Title/Title';
import Tasks from './Tasks/Tasks';

const categories = [
  { id: 1, type: 'to-do' },
  { id: 2, type: 'in-progress' },
  { id: 3, type: 'done' },
];

const ChoosedDay = () => {
  // useEffect(() => {
  //   const onClickBody = ({ target }) => {
  //     console.dir(target);
  //     if (target.tagName !== 'use') {
  //       setIsShowPopUpReplace(false);
  //       return;
  //     }
  //   };
  //   const body = document.querySelector('body');

  //   if (isShowPopUpReplace) {
  //     body.addEventListener('click', onClickBody);
  //   } else {
  //     body.removeEventListener('click', onClickBody);
  //   }
  // }, [isShowPopUpReplace]);

  const onAdd = category => {
    console.log('onAdd', category);
  };

  return (
    <ContainerMain>
      {categories.map(({ id, type }) => (
        <ContainerSecond key={id}>
          <Title type={type} onAdd={onAdd} />
          <Tasks type={type} />
          <ContainerButtonAddTask>
            <ButtonAddTask onClick={onAdd}>
              <IconButtonAddTask>
                <use xlinkHref={sprite + '#icon-plus'} />
              </IconButtonAddTask>
              <ButtonAddTaskText>Add task</ButtonAddTaskText>
            </ButtonAddTask>
          </ContainerButtonAddTask>
        </ContainerSecond>
      ))}
    </ContainerMain>
  );
};

export default ChoosedDay;
