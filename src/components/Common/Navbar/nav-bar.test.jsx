import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './navbar.component';
import Store from '../../../utils/store';

const customRender = (ui) => {
  return render(<Store>{ui}</Store>);
};

test('renders content', async () => {
  const props = {
    darkMode: false,
    setDarkMode: () => {
      console.log('hey');
    },
  };

  const { getByText, getByPlaceholderText } = customRender(
    <BrowserRouter>
      <NavBar {...props} />
    </BrowserRouter>
  );
  // check if the brand logo is displaying
  expect(getByText('wavel.')).toBeInTheDocument();

  // check if the search bar is displaying
  expect(getByPlaceholderText('Search Something')).toBeInTheDocument();
  expect(getByPlaceholderText('Search Something')).toHaveAttribute('type', 'text');
});

test('after clicking theme button the theme must be change', () => {
  const mockHandler = jest.fn();
  const props = {
    darkMode: false,
    setDarkMode: mockHandler,
  };

  const { getByTestId } = render(
    <BrowserRouter>
      <Store>
        <NavBar {...props} />
      </Store>
    </BrowserRouter>
  );

  const button = getByTestId('theme-btn');
  fireEvent.click(button);

  expect(mockHandler).toHaveBeenCalledTimes(1);
});
