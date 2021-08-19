import styled from 'styled-components';

export const AvtarImage = styled.img`
  &.avatar-sm {
    width: 28px;
  }
  &.avatar-lg {
    width: 58px;
  }
  width: 38px;
  border-radius: 0.7rem;
`;

export const Card = styled.div`
  background: var(--bg-transparent-color);
  backdrop-filter: blur(25px);
  right: 2%;
  border-radius: var(--border-radius);
  width: 35%;
  position: absolute;
  z-index: 1;
  transition: 0.5s;
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  animation-duration: 400ms;

  @media (min-width: 925px) {
    width: 20%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
