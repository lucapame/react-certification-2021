import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import LoginPage from '../../../pages/Login/Login.page';
import { useAuth } from '../../../providers/Auth';
import { SET_SEARCH_VALUE } from '../../../utils/action-types';
import { Context } from '../../../utils/store';
import Avatar from '../Avatar/avatar.component';
import PortalModal from '../Modal/portal-modal';
import { Button } from '../StyledComponets';
import UserSettingsModal from '../UserSettings/user-settings-modal.component';
import {
  Brand,
  Navbar,
  SearchIcon,
  SearchInput,
  SearchInputGroup,
} from './Styled/styled-components';

const NavBar = ({ darkMode, setDarkMode }) => {
  const [searchValue, setsearchValue] = useState('');
  const [openp, setOpenP] = useState(false);
  const history = useHistory();
  const [state, dispatch] = useContext(Context);
  const { authenticated, user } = useAuth();

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
    <Navbar className=" py-2 sticky-top">
      <div className="d-flex container-fluid  align-items-center justify-content-between">
        <div className="d-flex ">
          <Brand to="/" className=" h3 fw-bold me-3 ">
            wavel.
          </Brand>
        </div>
        <div className="" style={{ minWidth: '40%' }}>
          <SearchInputGroup className="input-group search">
            <SearchInput
              data-testid="search-input"
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
        {authenticated ? (
          <div className="d-flex">
            <Avatar img={user?.avatarUrl} className="d-none d-md-block" />
            <div>
              <UserSettingsModal>
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
              </UserSettingsModal>
            </div>
          </div>
        ) : (
          <>
            <Button
              data-testid="login-btn"
              type="button"
              btnType="primary"
              className="btn "
              onClick={() => setOpenP(!openp)}
            >
              <i className="fas fa-user-circle me-2 text-white d-none d-md-inline-block" />{' '}
              Accses
            </Button>

            {openp && (
              <PortalModal
                message="Hello Portal World!"
                isOpen={openp}
                onClose={() => setOpenP(false)}
              >
                <LoginPage />
              </PortalModal>
            )}
          </>
        )}
      </div>
    </Navbar>
  );
};

export default NavBar;
