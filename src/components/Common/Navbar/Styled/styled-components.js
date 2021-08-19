import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
  background: var(--bg-color);
  height: var(--navbar-height);
  display: flex;

  @media (max-height: 650px) {
    height: calc(var(--navbar-height) * 2);
  }
`;

export const Brand = styled(Link)`
  color: var(--text-color);
  transition: 0.2s;
  text-decoration: none;
  &:hover {
    background: -webkit-linear-gradient(rgba(202, 63, 251, 1), rgba(252, 105, 0, 1));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all ease-in-out 0.2s;
  }
`;

export const SearchInputGroup = styled.div`
  padding: 0.2em;
  background-color: var(--bg-contrast-color);
  border-radius: 100px !important;
`;

export const SearchInput = styled.input`
  &:focus {
    border: none;
    background-color: transparent;
    border-radius: 100px !important;
  }
  border: none;
  padding: 0.3em 1em;
  background-color: transparent;
  border-radius: 100px;
`;

export const SearchIcon = styled.span`
  &:hover {
    border-radius: 100px;
    transition: all 0.2s;
    transform: scale(1.1);
  }
  background-color: transparent;
  border-radius: 100px;
  transition: all 0.2s;
  cursor: pointer;
  background-color: var(--bg-contrast-color);
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
  padding: 1.5rem;
  margin: 2rem;
`;
