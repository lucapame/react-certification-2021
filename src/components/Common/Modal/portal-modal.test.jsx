/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
// eslint-disable-next-line import/no-extraneous-dependencies
import { fireEvent, render } from '@testing-library/react';

import PortalModal from './portal-modal';
import Store from '../../../utils/store';

const customRender = (ui) => {
  return render(<Store>{ui}</Store>);
};

test('renders content', async () => {
  let dispaly = true;
  const { getByTestId } = await customRender(
    <PortalModal
      isOpen={dispaly}
      onClose={() => {
        dispaly = false;
      }}
    />
  );

  expect(getByTestId('portal-modal-background')).toBeInTheDocument();
  expect(getByTestId('portal-modal-content')).toBeInTheDocument();
});

test('unmount content', async () => {
  let dispaly = true;
  const { getByTestId } = await customRender(
    <PortalModal
      isOpen={dispaly}
      onClose={() => {
        dispaly = false;
      }}
    />
  );

  fireEvent(
    getByTestId('close-modal-btn'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(getByTestId('portal-modal-background')).toBeInTheDocument();
  expect(getByTestId('portal-modal-content')).toBeInTheDocument();
});
