import React, { useRef, useState } from 'react';
import useOutsideAlerter from '../../../utils/hooks/useOutsideAlerter';
import { AvtarImage, Card } from './Styled/styled-components';

const Avatar = ({ img, size, alt, children }) => {
  const [display, setDisplay] = useState(false);
  const wrapperRef = useRef(null);

  const closeOnCkick = () => {
    setDisplay(false);
  };

  useOutsideAlerter(wrapperRef, closeOnCkick);
  return (
    <>
      <div className="d-flex">
        <AvtarImage
          className={`avatar-${size} d-none d-md-block `}
          src={img || '/images/profile_placeholder.png'}
          alt={alt || 'Avatar Image'}
        />
        {children && (
          <button
            data-testid="theme-btn"
            type="button"
            className="btn theme-toggle"
            disabled={display}
            onClick={() => setDisplay(!display)}
          >
            <i className="fas fa-sort-down" />
          </button>
        )}
      </div>
      {children && display && (
        <Card className="p-3" ref={wrapperRef}>
          <div className="d-flex align-items-center mb-2">
            <AvtarImage
              className={`avatar-${size} `}
              src={img || '/images/profile_placeholder.png'}
              alt={alt || 'Avatar Image'}
            />{' '}
            <p className="m-0 ms-2 fw-bold"> Luis Carlos Parra</p>
          </div>
          <div className="px-2">{children}</div>
        </Card>
      )}
    </>
  );
};

export default Avatar;
