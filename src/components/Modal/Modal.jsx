import React, { useEffect } from 'react';

import { Container } from './Modal.styled';

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEscKeyPress = (event) => {
            if (isOpen && event.key === 'Escape') {
                onClose();
            }
        };
      
         const handleClickOutside = event => {
           if (
             isOpen &&
             !document.getElementById('modal-container').contains(event.target)
           ) {
             onClose();
           }
         };
    
      window.addEventListener('keydown', handleEscKeyPress);
       window.addEventListener('mousedown', handleClickOutside);

        return () => {
          window.removeEventListener('keydown', handleEscKeyPress);
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }
  return (
    <Container id="modal-container">
      <div>
        
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </Container>
  );
};

export default Modal;
