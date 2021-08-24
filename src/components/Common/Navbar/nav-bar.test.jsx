import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './navbar.component';
import Store from '../../../utils/store';
import AuthProvider from '../../../providers/Auth';
import { AuthContext } from '../../../providers/Auth/Auth.provider';

const mockedUser = {
  id: '123',
  name: 'Luis Carlos ',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

const customRender = (ui) => {
  return render(
    <AuthProvider>
      <Store>{ui}</Store>
    </AuthProvider>
  );
};

test('renders content', async () => {
  const props = {
    darkMode: false,
    setDarkMode: () => {
      console.log('hey');
    },
  };

  const { getByText, getByPlaceholderText, getByTestId } = render(
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          login: jest.fn(),
          logout: jest.fn(),
          authenticated: true,
          user: mockedUser,
        }}
      >
        <Store>
          <NavBar {...props} />
        </Store>
      </AuthContext.Provider>
    </BrowserRouter>
  );

  const button = getByTestId('user-btn');
  fireEvent.click(button);
  // check if the brand logo is displaying
  expect(getByText('wavel.')).toBeInTheDocument();

  // check if the search bar is displaying
  expect(getByPlaceholderText('Search Something')).toBeInTheDocument();
  expect(getByPlaceholderText('Search Something')).toHaveAttribute('type', 'text');

  const themeButton = getByTestId('theme-btn');
  fireEvent.click(themeButton);
  expect(getByText('Dark Mode')).toBeInTheDocument();

  expect(getByTestId('search-input')).toBeInTheDocument();
  const searchInput = getByTestId('search-input');
  fireEvent(
    searchInput,
    new KeyboardEvent('keydown', {
      key: 'Enter',
    })
  );
});

test('after clicking theme button the theme must be change', () => {
  const mockHandler = jest.fn();
  const props = {
    darkMode: false,
    setDarkMode: mockHandler,
  };

  const { getByTestId } = customRender(
    <BrowserRouter>
      <Store>
        <NavBar {...props} />
      </Store>
    </BrowserRouter>
  );

  const button = getByTestId('login-btn');
  fireEvent.click(button);

  expect(getByTestId('portal-modal-content')).toBeInTheDocument();
});
