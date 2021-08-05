import styled from 'styled-components';

// export const Preloader = styled.div`
//   border: none;
//   border-radius: var(--border-radius);
//   background-color: transparent;
// `;

export const PlaceholderContainer = styled.div`
  min-width: 100%;
  height: ${({ flat }) => (flat ? '120px' : '200px')};
  max-height: 280px;
  border-radius: var(--border-radius);
  animation: 1s ease infinite pulse;
`;

export const Preloader = styled.div`
  border: none;
  border-radius: var(--border-radius);
  background-color: transparent;
`;
