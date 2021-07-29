import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 4em;
  height: 85vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  &:hover {
    background-color: var(--bg-contrast-color);
    color: var(--text-color);
  }
  color: inherit;
  text-decoration: none;
  font-size: 1.5em;
  background-color: var(--bg-color);
`;

export const ColorfulText = styled.h1`
  background: -webkit-linear-gradient(rgba(202, 63, 251, 1), rgba(252, 105, 0, 1));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all ease-in-out 0.2s;
`;
