import React, { useRef, useState } from 'react';
import Avatar from '../Avatar/avatar.component';
import useOutsideAlerter from '../../../utils/hooks/useOutsideAlerter';
import { Card, UnstyledLink } from './styled/styled-omponents';
import { useAuth } from '../../../providers/Auth';

const UserSettingsModal = ({ children }) => {
  const [display, setDisplay] = useState(false);
  const wrapperRef = useRef(null);
  const { logout, user } = useAuth();

  const closeOnCkick = () => {
    setDisplay(false);
  };

  useOutsideAlerter(wrapperRef, closeOnCkick);

  return (
    <>
      <button
        data-testid="user-btn"
        type="button"
        className="btn theme-toggle"
        disabled={display}
        onClick={() => setDisplay(!display)}
      >
        <i className="fas fa-sort-down" />
      </button>

      {display && (
        <Card className="p-3" ref={wrapperRef} data-testid="settings-card">
          <div className="d-flex align-items-center mb-2">
            <Avatar img={user?.avatarUrl} />
            <p className="m-0 ms-2 fw-bold"> {user?.name}</p>
          </div>
          <div className="px-2">
            <UnstyledLink
              data-testid="favorites-link"
              to="/favorites"
              className="my-3"
              onClick={() => setDisplay(!display)}
            >
              <i className="fas fa-heart" />
              <p className="m-0 ms-2">Favorites</p>
            </UnstyledLink>

            <UnstyledLink
              data-testid="logout-link"
              to="/"
              className="my-3"
              onClick={() => {
                logout();
                setDisplay(!display);
              }}
            >
              <i className="fas fa-sign-out-alt" />
              <p className="m-0 ms-2">Sign out</p>
            </UnstyledLink>

            <hr className="dropdown-divider" />

            {children}
          </div>
        </Card>
      )}
    </>
  );
};

export default UserSettingsModal;
