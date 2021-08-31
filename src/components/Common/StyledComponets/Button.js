import styled, { css } from 'styled-components';

export const Button = styled.button`
  &:hover {
    color ${({ btnType }) => btnType && '#fff'};
    background: ${({ btnType }) => `var(--color-${btnType}-contrast);`};
  }
 

  ${({ btnType }) =>
    btnType &&
    css`
      background: var(--color-${btnType});
      color: #fff !important;
    `}
`;
