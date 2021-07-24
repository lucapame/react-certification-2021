import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './avatar.component';

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <Fragment>
      <nav className=" pt-3 " data-theme={darkMode ? 'dark' : 'light'}>
        <div className="d-flex container-fluid  align-items-center justify-content-between">
          <div className="head d-flex ">
            <Link to="/" className="navbar-brand h3 fw-bold ">
              wavel.
            </Link>
          </div>
          <div className="" style={{ minWidth: '40%' }}>
            <div className="input-group search">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar"
                aria-label="search-icon"
              />

              <span className="input-group-text border-0">
                {' '}
                <i className="fas fa-search" />
              </span>
            </div>
          </div>
          <div className="tail d-flex">
            <div className="toggle mx-3 align-items-center">
              <button type="button" className="btn theme-toggle" onClick={setDarkMode}>
                {darkMode ? (
                  <div className="d-flex align-items-center">
                    <i className="fas fa-sun me-2" />
                    <p className="m-0 d-none d-md-block">Light Mode</p>
                  </div>
                ) : (
                  <div className="d-flex align-items-center">
                    <i className="fas fa-moon me-2" />
                    <p className="m-0 d-none d-md-block">Dark Mode</p>
                  </div>
                )}
              </button>
            </div>
            <div className="d-none d-md-block">
              <Avatar />
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
