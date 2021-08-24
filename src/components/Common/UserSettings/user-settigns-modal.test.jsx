import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Store from '../../../utils/store';
import UserSettingsModal from './user-settings-modal.component';
import AuthProvider from '../../../providers/Auth';

const customRender = (ui) => {
  return render(
    <AuthProvider>
      <Store>{ui}</Store>
    </AuthProvider>
  );
};

test('renders button', async () => {
  const { getByTestId } = await customRender(<UserSettingsModal />);

  expect(getByTestId('user-btn')).toBeInTheDocument();
});

test('renders card content', async () => {
  const { getByTestId } = await customRender(
    <BrowserRouter>
      <UserSettingsModal>
        <p>This is a child</p>
      </UserSettingsModal>
    </BrowserRouter>
  );

  const button = getByTestId('user-btn');
  fireEvent.click(button);

  expect(getByTestId('settings-card')).toBeInTheDocument();
  expect(screen.getByText(/This is a child/i)).toBeInTheDocument();

  const link = getByTestId('favorites-link');
  fireEvent.click(link);

  fireEvent.click(button);

  const logoutLink = getByTestId('logout-link');
  fireEvent.click(logoutLink);
});
