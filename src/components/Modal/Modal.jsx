import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Backdrop, Container, IconClose, CloseButton } from './Modal.styled';
import sprite from '../../assets/images/icons/icons.svg';

const Modal = ({
  isOpen,
  onClose,
  closeButtonPosition = { top: '14px', right: '14px' },
  children,
}) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscKeyPress = event => {
      if (isOpen && event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    window.addEventListener('keydown', handleEscKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Container id="modal-container">
        <CloseButton onClick={onClose} style={closeButtonPosition}>
          <IconClose>
            <use xlinkHref={`${sprite}#icon-x-close`} width={24} height={24} />
          </IconClose>
        </CloseButton>

        {children}
      </Container>
    </Backdrop>,
    document.getElementById('modal-root')
  );
};

export default Modal;
