import React from 'react';
import {
  ContainerTitle,
  IconAddTask,
  MainTitle,
  TitleButtonAddTask,
} from './Title.styled';
import sprite from '../../../../assets/images/icons/icons.svg';

const Title = ({ type, onAdd, tasks, isDisabledAddTask }) => {
  return (
    <ContainerTitle tasks={tasks}>
      <MainTitle>
        {(() => {
          switch (type) {
            case 'to-do':
              return 'To do';

            case 'in-progress':
              return 'In progress';
            case 'done':
              return 'Done';

            default:
              return;
          }
        })()}
      </MainTitle>
      <TitleButtonAddTask disabled={isDisabledAddTask} onClick={onAdd}>
        <IconAddTask>
          <use xlinkHref={sprite + '#icon-icon-plus'} />
        </IconAddTask>
      </TitleButtonAddTask>
    </ContainerTitle>
  );
};

export default Title;
