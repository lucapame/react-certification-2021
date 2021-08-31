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
