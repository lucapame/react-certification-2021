import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../../utils/store';
import FavoritesPage from './Favorites.page';
import AuthProvider from '../../providers/Auth';

const customRender = (ui, state, dispatch) => {
  return render(
    <AuthProvider>
      <Context.Provider value={[state, dispatch]}>{ui}</Context.Provider>
    </AuthProvider>
  );
};

const mockResult = [
  {
    etag: 'KFJuIjRi-yX513IXhj7fLOcbm8s',
    thumbnalURL: 'https://i.ytimg.com/vi/IDpGC3OVjpU/mqdefault.jpg',
    title: '1 DÍA PARA TORTILLALAND | CONTALAND #2 - TheGrefg',
    channelTitle: 'TheGrefg',
    publishTime: '2021-08-14T20:52:24Z',
    index: 17,
    videoId: 'IDpGC3OVjpU',
    fullVideo: {
      kind: 'youtube#searchResult',
      etag: 'KFJuIjRi-yX513IXhj7fLOcbm8s',
      id: {
        kind: 'youtube#video',
        videoId: 'IDpGC3OVjpU',
      },
      snippet: {
        publishedAt: '2021-08-14T20:52:24Z',
        channelId: 'UCCEmjNPpJYhGDgaEqeeA4HA',
        title: '1 DÍA PARA TORTILLALAND | CONTALAND #2 - TheGrefg',
        description:
          'Sígueme para ver mis Directos! https://www.twitch.tv/thegrefg ☆ ¡Mi Libro! https://www.planetadelibros.com/libro-los-secretos-de-youtube/279938 ➜ ¡Mi Mando ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/IDpGC3OVjpU/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/IDpGC3OVjpU/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/IDpGC3OVjpU/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'TheGrefg',
        liveBroadcastContent: 'none',
        publishTime: '2021-08-14T20:52:24Z',
      },
    },
  },
  {
    etag: 'T8fuIyEUHt-z0Ns49S6kMUVd2Ms',
    thumbnalURL: 'https://i.ytimg.com/vi/_Rqjh1DkSM0/mqdefault.jpg',
    title:
      'Vardy Stunner Beats Wolves In Season Opener | Leicester City 1 Wolverhampton Wanderers 0',
    channelTitle: 'LCFC',
    publishTime: '2021-08-14T21:00:09Z',
    index: 16,
    videoId: '_Rqjh1DkSM0',
    fullVideo: {
      kind: 'youtube#searchResult',
      etag: 'T8fuIyEUHt-z0Ns49S6kMUVd2Ms',
      id: {
        kind: 'youtube#video',
        videoId: '_Rqjh1DkSM0',
      },
      snippet: {
        publishedAt: '2021-08-14T21:00:09Z',
        channelId: 'UCBkRQtxofyXr09mWtgoUUqw',
        title:
          'Vardy Stunner Beats Wolves In Season Opener | Leicester City 1 Wolverhampton Wanderers 0',
        description:
          "Highlights from Leicester City's 1-0 Premier League victory over Wolves at King Power Stadium.",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/_Rqjh1DkSM0/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/_Rqjh1DkSM0/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/_Rqjh1DkSM0/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'LCFC',
        liveBroadcastContent: 'none',
        publishTime: '2021-08-14T21:00:09Z',
      },
    },
  },
  {
    etag: '1PKbY-8G3Hwu9mqAtPyXUUXlbUM',
    thumbnalURL: 'https://i.ytimg.com/vi/JLHl9UgTr2A/mqdefault.jpg',
    title:
      'Marcus Spears reacts to Jared Goff’s preseason debut with the Lions | SportsCenter',
    channelTitle: 'ESPN',
    publishTime: '2021-08-14T23:15:00Z',
    index: 10,
    videoId: 'JLHl9UgTr2A',
    fullVideo: {
      kind: 'youtube#searchResult',
      etag: '1PKbY-8G3Hwu9mqAtPyXUUXlbUM',
      id: {
        kind: 'youtube#video',
        videoId: 'JLHl9UgTr2A',
      },
      snippet: {
        publishedAt: '2021-08-14T23:15:00Z',
        channelId: 'UCiWLfSweyRNmLpgEHekhoAg',
        title:
          'Marcus Spears reacts to Jared Goff’s preseason debut with the Lions | SportsCenter',
        description:
          "Marcus Spears reacts to Jared Goff's preseason debut with the Lions | SportsCenter Marcus Spears joins SportsCenter and gives his first impressions of Jared ...",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/JLHl9UgTr2A/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/JLHl9UgTr2A/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/JLHl9UgTr2A/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'ESPN',
        liveBroadcastContent: 'none',
        publishTime: '2021-08-14T23:15:00Z',
      },
    },
  },
];

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
// test('renders the list of videos', () => {
//   const state = {
//     status: 'success',
//     data: mockResult,
//     error: null,
//   };
//   useYoutubeQuery.mockImplementation(() => state);
//   const { getAllByTestId } = customRender(
//     <BrowserRouter>
//       <Home />
//     </BrowserRouter>
//   );

//   expect(getAllByTestId('video-card').length).toEqual(mockResult.items.length);
// });
