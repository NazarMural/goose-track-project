import React, { useEffect } from 'react';

import { Container } from './Modal.styled';

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEscKeyPress = (event) => {
            if (isOpen && event.key === 'Escape') {
                onClose();
            }
        };
    
        window.addEventListener('keydown', handleEscKeyPress);

        return () => {
            window.removeEventListener('keydown', handleEscKeyPress);
        };
    }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }
  return (
    <Container>
      <div>
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </Container>
  );
};

export default Modal;
