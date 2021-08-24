import React from 'react';
import '@testing-library/jest-dom/extend-expect';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout.component';
import AuthProvider from '../../providers/Auth';
import Store from '../../utils/store';

const customRender = (ui) => {
  return render(
    <AuthProvider>
      <Store>
        <BrowserRouter>{ui}</BrowserRouter>
      </Store>
    </AuthProvider>
  );
};

test('renders content', async () => {
  const { getByText } = await customRender(<Layout />);

  expect(getByText('wavel.')).toBeInTheDocument();
});
