import styled from 'styled-components';

export const HeaderCard = styled.section`
  padding: 3em;
  background: linear-gradient(130deg, rgba(202, 63, 251, 1) 0%, rgba(252, 105, 0, 1) 80%);
  border-radius: var(--border-radius);
`;

export const Preloader = styled.div`
  border: none;
  border-radius: var(--border-radius);
  background-color: transparent;
`;

export const PlaceholderContainer = styled.div`
  min-width: 100%;
  height: 280px;
  max-height: 280px;
  border-radius: var(--border-radius);
  animation: 1s ease infinite pulse;
`;
