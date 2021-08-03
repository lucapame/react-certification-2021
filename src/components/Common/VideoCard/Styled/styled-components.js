import styled from 'styled-components';

export const VideoCardWrapper = styled.div`
  &:hover {
    border: none;

    transform: translateY(-1.1em);
    z-index: 999;
  }
  border: none;
  background-color: var(--bg-color);
  cursor: pointer;
  text-decoration: none;
  animation: 1s ease-in-out fade-in;
  height: 330px;
`;

export const CardMutedText = styled.p`
  color: var(--text-lead);
  font-size: small;
`;

export const TopImage = styled.img`
  object-fit: cover;
  border-radius: var(--border-radius);
  max-height: 172px;
`;

export const VideoCardFlatWrapper = styled.div`
  &:hover {
    transform: translateX(-1.1em);
    z-index: 999;
  }
  cursor: pointer;
  border-radius: var(--border-radius);
  animation: 1s ease-in-out fade-in;
  padding: 0.5em;
`;

export const SideImage = styled.img`
  border-radius: var(--border-radius);
  width: 40%;
  object-fit: cover;
  max-height: 90px;
  max-width: 160px;
`;
