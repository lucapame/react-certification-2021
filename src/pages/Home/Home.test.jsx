import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home.page';
import Store from '../../utils/store';
import { MAX_RESUTS_ON_SEARCH } from '../../utils/constants';
import AuthProvider from '../../providers/Auth';
import axiosInstance from '../../utils/hooks/axios-instance';
import { mockResult } from '../../utils/mock-data';

const customRender = (ui) => {
  return render(
    <AuthProvider>
      <Store>{ui}</Store>
    </AuthProvider>
  );
};
let mockGet;
const flushPromises = () => new Promise(setImmediate);

beforeEach(() => {
  mockGet = jest.spyOn(axiosInstance(), 'get');
});

afterEach(() => {
  jest.clearAllMocks();
});
test('renders content', () => {
  mockGet.mockImplementation(() => Promise.resolve(mockResult));

  const { queryByText } = customRender(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(queryByText('Hey there!')).toBeInTheDocument();
  expect(
    queryByText(
      'Find the videos that you love and discover the one that will blow your mind.'
    )
  ).toBeInTheDocument();
});

test('renders the list of videos', async () => {
  mockGet.mockImplementation(() => {
    return {
      response: {
        status: 200,
        data: mockResult,
      },
    };
  });
  await flushPromises();
  const { getAllByTestId } = customRender(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  setTimeout(() => {
    expect(getAllByTestId('video-card').length).toEqual(mockResult.items.length);
  }, 1000);
});

test('renders a "not found" message when is not results to show', () => {
  mockGet.mockImplementation(() => {
    return {
      response: {
        status: 200,
        data: [],
      },
    };
  });
  const { queryByText } = customRender(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  setTimeout(() => {
    expect(queryByText('Sorry, there was an an error :(')).toBeInTheDocument();
  }, 1000);
});

test('renders an errir message', () => {
  mockGet.mockImplementation(() => {
    return {
      response: {
        status: 500,
        data: {
          message: 'Server Error',
        },
      },
    };
  });
  const { queryByText } = customRender(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  setTimeout(() => {
    expect(queryByText('Sorry, there was an an error :(')).toBeInTheDocument();
  }, 1000);
});

test('renders the loader', () => {
  mockGet.mockImplementation(() => Promise.resolve(mockResult));
  const { getAllByTestId } = customRender(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(getAllByTestId('preloader-card').length).toEqual(MAX_RESUTS_ON_SEARCH);
});
