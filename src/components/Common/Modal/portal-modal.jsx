import React, { useContext, useRef } from 'react';
import ReactDOM from 'react-dom';
import useOutsideAlerter from '../../../utils/hooks/useOutsideAlerter';
import { Context } from '../../../utils/store';
import { Button } from '../StyledComponets';
import { ModalContainer, ModalContent } from './Styled/styled-compoents';

const PortalModal = ({ children, isOpen, onClose }) => {
  const wrapperRef = useRef(null);
  const [state] = useContext(Context);
  useOutsideAlerter(wrapperRef, onClose);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <ModalContainer data-theme={state.theme} data-testid="portal-modal-background">
      <ModalContent ref={wrapperRef} data-testid="portal-modal-content">
        <div className="text-end">
          <Button
            className="btn float-right"
            onClick={onClose}
            data-testid="close-modal-btn"
          >
            &times;
          </Button>
        </div>
        {children}
      </ModalContent>
    </ModalContainer>,
    document.body
  );
};

export default PortalModal;
