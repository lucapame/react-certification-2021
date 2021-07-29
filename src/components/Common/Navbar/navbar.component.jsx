import React from 'react';
import Avatar from '../Avatar/avatar.component';
import {
  Brand,
  Navbar,
  SearchIcon,
  SearchInput,
  SearchInputGroup,
} from './Styled/styled-components';

const NavBar = ({ darkMode, setDarkMode }) => {
  return (
    <Navbar className=" py-2 sticky-top" data-theme={darkMode ? 'dark' : 'light'}>
      <div className="d-flex container-fluid  align-items-center justify-content-between">
        <div className="d-flex ">
          <Brand to="/" className=" h3 fw-bold ">
            wavel.
          </Brand>
        </div>
        <div className="" style={{ minWidth: '40%' }}>
          <SearchInputGroup className="input-group search">
            <SearchInput
              id="search-input"
              type="text"
              className="form-control"
              placeholder="Search Something"
            />
            <SearchIcon className="input-group-text border-0">
              {' '}
              <i className="fas fa-search me-2" />
            </SearchIcon>
          </SearchInputGroup>

          {/* <div className="input-group search">
            <input
              id="search-input"
              type="text"
              className="form-control"
              placeholder="Search Something"
              aria-label="search-icon"
            />

            <span className="input-group-text border-0">
              {' '}
              <i className="fas fa-search" />
            </span>
          </div> */}
        </div>
        <div className="tail d-flex">
          <div className="toggle mx-3 align-items-center">
            <button
              data-testid="theme-btn"
              type="button"
              className="btn theme-toggle"
              onClick={setDarkMode}
            >
              {darkMode ? (
                <div className="d-flex  align-items-center">
                  <i className="fas fa-sun " />
                  <p className="m-0 d-none d-md-block ms-2">Light Mode</p>
                </div>
              ) : (
                <div className="d-flex   align-items-center">
                  <i className="fas fa-moon " />
                  <p className="m-0 d-none d-md-block ms-2">Dark Mode</p>
                </div>
              )}
            </button>
          </div>
          <div className="d-none d-md-block">
            <Avatar />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
