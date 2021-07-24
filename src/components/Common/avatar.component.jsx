import React from 'react';

const Avatar = ({ img, size, alt }) => {
  return (
    <div>
      <img
        className={`avatar-${size} avatar`}
        src={img || '/images/profile_placeholder.jpg'}
        alt={alt || 'Avatar Image'}
      />
    </div>
  );
};

export default Avatar;
