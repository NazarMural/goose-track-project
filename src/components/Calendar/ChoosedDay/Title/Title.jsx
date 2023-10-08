import React from 'react';
import { ContainerTitle, IconAddTask, MainTitle } from './Title.styled';
import sprite from '../../../../assets/images/icons/icons.svg';

const Title = ({ type, onAdd, tasks }) => {
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
      <IconAddTask onClick={onAdd}>
        <use xlinkHref={sprite + '#icon-icon-plus'} />
      </IconAddTask>
    </ContainerTitle>
  );
};

export default Title;
