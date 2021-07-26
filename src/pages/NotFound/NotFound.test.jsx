import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NotFoundPage from './NotFound.page';

test('renders content', async () => {
  const { getByText } = await render(
    <BrowserRouter>
      <NotFoundPage />
    </BrowserRouter>
  );
  expect(getByText('Oh no! This page does not exsist.')).toBeInTheDocument(); // throws an expception if the element cannot be found
});
