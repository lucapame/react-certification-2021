import React from 'react';
import { AvtarImage } from './Styled/styled-components';

const Avatar = ({ img, size, alt }) => {
  return (
    <AvtarImage
      className={`avatar-${size}`}
      src={img || '/images/profile_placeholder.png'}
      alt={alt || 'Avatar Image'}
    />
  );
};

export default Avatar;
