import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { SET_SEARCH_VALUE } from '../../../utils/action-types';
import { Context } from '../../../utils/store';
import Avatar from '../Avatar/avatar.component';
import {
  Brand,
  Navbar,
  SearchIcon,
  SearchInput,
  SearchInputGroup,
  UnstyledLink,
} from './Styled/styled-components';

const NavBar = ({ darkMode, setDarkMode }) => {
  const [searchValue, setsearchValue] = useState('');
  const history = useHistory();
  const [state, dispatch] = useContext(Context);

  const onChange = (e) => {
    setsearchValue(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      history.push('/');
      dispatch({ type: SET_SEARCH_VALUE, payload: searchValue });
    }
  };

  return (
    <Navbar className=" py-2 sticky-top" data-theme={darkMode ? 'dark' : 'light'}>
      <div className="d-flex container-fluid  align-items-center justify-content-between">
        <div className="d-flex ">
          <Brand to="/" className=" h3 fw-bold me-3 ">
            wavel.
          </Brand>
        </div>
        <div className="" style={{ minWidth: '40%' }}>
          <SearchInputGroup className="input-group search">
            <SearchInput
              id="search-input"
              type="text"
              className="form-control"
              placeholder={state.searchValue ? state.searchValue : 'Search Something'}
              value={searchValue}
              onChange={onChange}
              onKeyPress={handleKeyPress}
            />
            <SearchIcon
              className="input-group-text border-0"
              onClick={() => {
                history.push('/');
                dispatch({ type: SET_SEARCH_VALUE, payload: searchValue });
              }}
            >
              {' '}
              <i className="fas fa-search me-2" />
            </SearchIcon>
          </SearchInputGroup>
        </div>
        <div className="tail d-flex">
          <div>
            <Avatar>
              <UnstyledLink to="/favorites">
                <div className="d-flex  align-items-center">
                  <i className="fas fa-heart" />
                  <p className="m-0 ms-2">Favorites</p>
                </div>
              </UnstyledLink>

              <UnstyledLink to="/" onClick={setDarkMode}>
                <div className="d-flex  align-items-center">
                  <i className="fas fa-sign-out-alt" />
                  <p className="m-0 ms-2">Sign out</p>
                </div>
              </UnstyledLink>

              <hr className="dropdown-divider" />

              <button
                data-testid="theme-btn"
                type="button"
                className="btn p-0"
                onClick={setDarkMode}
              >
                {darkMode ? (
                  <div className="d-flex  align-items-center">
                    <i className="fas fa-sun " />
                    <p className="m-0 ms-2">Light Mode</p>
                  </div>
                ) : (
                  <div className="d-flex   align-items-center">
                    <i className="fas fa-moon " />
                    <p className="m-0 ms-2">Dark Mode</p>
                  </div>
                )}
              </button>
            </Avatar>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;
