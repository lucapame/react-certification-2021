import React from 'react';
import styled from 'styled-components';

const AvtarImage = styled.img`
  &.avatar-sm {
    width: 28px;
  }
  &.avatar-lg {
    width: 58px;
  }
  width: 38px;
  border-radius: 0.7rem;
`;

const Avatar = ({ img, size, alt }) => {
  return (
    <AvtarImage
      className={`avatar-${size}`}
      src={img || '/images/profile_placeholder.jpg'}
      alt={alt || 'Avatar Image'}
    />
  );
};

export default Avatar;
