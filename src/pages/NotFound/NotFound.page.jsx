import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  height: 85vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  &:hover {
    background-color: var(--bg-contrast-color);
    color: var(--text-color);
  }
  color: inherit;
  text-decoration: none;
  font-size: 1.5em;
  background-color: var(--bg-color);
`;

const ColorfulText = styled.h1`
  background: -webkit-linear-gradient(rgba(202, 63, 251, 1), rgba(252, 105, 0, 1));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all ease-in-out 0.2s;
`;

function NotFoundPage() {
  return (
    <Wrapper className="not-found">
      {/* <ColorfulText className=" fw-bold">404</ColorfulText> */}
      <ColorfulText className="display-1 fw-bold w-50 text-center">
        Oh no! This page does not exsist.
      </ColorfulText>

      <StyledLink to="/" className="btn mt-4">
        <i className="fas fa-long-arrow-alt-left" /> Take me home
      </StyledLink>
    </Wrapper>
  );
}

export default NotFoundPage;
