import React from 'react';
import PropTypes from 'prop-types';
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
      <TitleButtonAddTask
        disabled={isDisabledAddTask}
        onClick={() => onAdd(type)}
      >
        <IconAddTask>
          <use xlinkHref={sprite + '#icon-icon-plus'} />
        </IconAddTask>
      </TitleButtonAddTask>
    </ContainerTitle>
  );
};

Title.propTypes = {
  type: PropTypes.oneOf(['to-do', 'in-progress', 'done']),
  onAdd: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  isDisabledAddTask: PropTypes.bool.isRequired,
};

export default Title;
