import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const VideoCardWrapper = styled.div`
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
  margin: ${({ flat }) => (flat ? '1.2rem auto' : '1.2rem auto')};
  animation-delay: ${({ animationdelay }) => `${animationdelay * (1 / 18)}s` || ''};

  @media (max-width: 990px) {
    height: ${({ flat }) => (flat ? '80px' : '260px')};
  }
`;

export const LinkWrapper = styled(Link)`
  cursor: pointer;
  border: none;
  text-decoration: none;
  display: ${({ flat }) => (flat ? 'flex' : 'box')};

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

export const IconButton = styled.div`
  &:hover:before {
    content: '${({ iconDesc }) => iconDesc}';
    animation: 0.3s ease-in-out fade-in;
    padding: 0.5rem 0.5rem;
    padding: 0.5rem 0.5rem;
    background-color: var(--bg-transparent-color);
    backdrop-filter: blur(25px);
    border-radius: var(--border-radius);
    font-size: small;
  }
  position: absolute;
  bottom: 2%;
  padding: 0.1rem;
  right: ${({ flat }) => (flat ? '0' : '10%')};
`;

export const Icon = styled.i`
  color: var(--text-lead);
  ${({ active }) =>
    active &&
    css`
      color: var(--color-secondary) !important;
    `}
`;
