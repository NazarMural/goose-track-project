import React from 'react';
import  Modal  from 'components/Modal/Modal';
import { TaskForm } from 'components/TaskModal/TaskForm/TaskForm';

export const TaskModal = ({ category, task, onClose, isOpen }) => {
    const closeButtonPosition = { top: '16px', right: '16px' };
    
    return (
        <Modal onClose={onClose} isOpen={isOpen} closeButtonPosition={closeButtonPosition}>
        <TaskForm onClose={onClose} category={category} task={task} />
        </Modal>
    );
};