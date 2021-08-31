import styled from 'styled-components';

export const LogoImg = styled.img`
  filter: invert(var(--invert));
`;

export const FormWrapper = styled.div`
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
