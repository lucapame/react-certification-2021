import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    right: 0;
  }
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.2rem;
  display: flex;
  align-items: center;
`;
