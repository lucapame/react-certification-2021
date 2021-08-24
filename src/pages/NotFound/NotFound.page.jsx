import React from 'react';
import { ColorfulText } from '../../components/Common/StyledComponets';
import { Wrapper, StyledLink } from './Styled/styled-components';

function NotFoundPage() {
  return (
    <Wrapper className="not-found">
      {/* <ColorfulText className=" fw-bold">404</ColorfulText> */}
      <ColorfulText className="display-1 fw-bold  text-center">
        Oh no! This page does not exsist.
      </ColorfulText>

      <StyledLink to="/" className="btn mt-4">
        <i className="fas fa-long-arrow-alt-left" /> Take me home
      </StyledLink>
    </Wrapper>
  );
}

export default NotFoundPage;
