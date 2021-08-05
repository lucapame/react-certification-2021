import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const VideoCardWrapper = styled(Link)`
  &:hover {
    border: none;
    transform: ${({ flat }) => (flat ? 'translateY(-.5rem);' : 'translateY(-1.1em)')};
    z-index: 999;
  }
  z-index: 999;
  cursor: pointer;
  border-radius: var(--border-radius);
  border: none;
  background-color: var(--bg-color);
  text-decoration: none;
  animation: 1s ease-in-out fade-in;
  height: ${({ flat }) => (flat ? '80px' : '300px')};
  display: ${({ flat }) => (flat ? 'flex' : 'box')};
  margin: ${({ flat }) => (flat ? '1.2rem auto' : '1.2rem auto')};
  animation-delay: ${({ animationDelay }) => `${animationDelay * (1 / 18)}s` || ''};

  @media (max-width: 990px) {
    height: ${({ flat }) => (flat ? '80px' : '260px')};
  }
`;

export const CardImage = styled.img`
  object-fit: cover;
  z-index: 999;
  border-radius: var(--border-radius);
  width: ${({ flat }) => (flat ? '40%' : '100%')};
  max-height: ${({ flat }) => (flat ? '90px' : '172px')};
  max-width: ${({ flat }) => (flat ? '160px' : '100%')};
`;

export const CardTitle = styled.h5`
  --max-lines: ${({ flat }) => (flat ? '2' : '4')};
  max-height: ${({ flat }) => (flat ? 'calc(var(--lh) * var(--max-lines));' : 'auto')};
  font-size: ${({ flat }) => (flat ? '1rem' : 'auto')};
  overflow: ${({ flat }) => (flat ? 'hidden' : '')};
  padding-top: ${({ flat }) => (flat ? '' : '1rem')};
  text-overflow: ellipsis;
`;

export const CardMutedText = styled.p`
  color: var(--text-lead);
  font-size: small;
`;
