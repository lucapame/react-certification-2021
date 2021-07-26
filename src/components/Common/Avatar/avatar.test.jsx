import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Avatar from './avatar.component';

test('renders content', async () => {
  const props = {
    img: 'https://via.placeholder.com/150',
    size: 'lg',
    alt: 'Luis C.',
  };

  const { getByAltText } = await render(<Avatar {...props} />);

  expect(getByAltText('Luis C.')).toBeInTheDocument();
});

test('renders content without a url and an alt text', async () => {
  const props = {
    img: '',
    size: 'lg',
    alt: '',
  };

  const { getByAltText } = await render(<Avatar {...props} />);
  const image = getByAltText('Avatar Image');

  expect(image.src).toContain('/images/profile_placeholder.jpg');
});
