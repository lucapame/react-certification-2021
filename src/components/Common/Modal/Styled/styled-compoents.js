import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(20px);
  animation-name: fadeIn;
  animation-duration: 200ms;
`;

export const ModalContent = styled.div`
  background-color: var(--bg-color);
  padding: 1rem;
  width: 50%;
  overflowy: scroll;
  border-radius: var(--border-radius);
  animation-name: zoomIn;
  animation-duration: 200ms;
  @media (max-width: 900px) {
    width: 90%;
    left: 5%;
  }
`;
