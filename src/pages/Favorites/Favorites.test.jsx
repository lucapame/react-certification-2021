import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../../utils/store';
import FavoritesPage from './Favorites.page';
import AuthProvider from '../../providers/Auth';
import { mockResult } from '../../utils/mock-data';

const customRender = (ui, state, dispatch) => {
  return render(
    <AuthProvider>
      <Context.Provider value={[state, dispatch]}>{ui}</Context.Provider>
    </AuthProvider>
  );
};

afterEach(cleanup);

test('renders content', () => {
  const initialState = {
    theme: 'light',
    searchValue: '',
    currentVideo: null,
    loading: false,
    favoriteVideos: mockResult,
  };
  const { getAllByTestId } = customRender(
    <BrowserRouter>
      <FavoritesPage />
    </BrowserRouter>,
    initialState,
    jest.fn()
  );
  expect(getAllByTestId('video-card').length).toEqual(mockResult.length);
});
