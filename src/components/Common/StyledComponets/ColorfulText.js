import styled from 'styled-components';

export const ColorfulText = styled.h1`
  background: -webkit-linear-gradient(
    var(--color-primary),
    var(--color-primary-contrast)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all ease-in-out 0.2s;
`;
