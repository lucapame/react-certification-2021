import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../../utils/store';

import VideoPlayer from './Player.page';
import { MAX_RESUTS_ON_SEARCH } from '../../utils/constants';
import AuthProvider from '../../providers/Auth';
import axiosInstance from '../../utils/hooks/axios-instance';

const customRender = (ui, state, dispatch) => {
  return render(
    <AuthProvider>
      <Context.Provider value={[state, dispatch]}>{ui}</Context.Provider>
    </AuthProvider>
  );
};

const mockResult = {
  kind: 'youtube#searchListResponse',
  etag: 'LRviZfd_p3HDDD2uBk5Qv7zaEQU',
  nextPageToken: 'CBkQAA',
  regionCode: 'MX',
  pageInfo: {
    totalResults: 2323,
    resultsPerPage: 25,
  },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
      id: {
        kind: 'youtube#channel',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      },
      snippet: {
        publishedAt: '2014-09-27T01:39:18Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline',
        description:
          "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
        thumbnails: {
          default: {
            url: 'https:yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
          },
          medium: {
            url: 'https:yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
          },
          high: {
            url: 'https:yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'upcoming',
        publishTime: '2014-09-27T01:39:18Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
      id: {
        kind: 'youtube#video',
        videoId: 'nmXMgqjQzls',
      },
      snippet: {
        publishedAt: '2019-09-30T23:54:32Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Video Tour | Welcome to Wizeline Guadalajara',
        description:
          'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'none',
        publishTime: '2019-09-30T23:54:32Z',
      },
    },
  ],
};

const sigleVideo = {
  kind: 'youtube#searchResult',
  etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
  id: {
    kind: 'youtube#channel',
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
  },
  snippet: {
    publishedAt: '2014-09-27T01:39:18Z',
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    title: 'Wizeline',
    description:
      "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
    thumbnails: {
      default: {
        url: 'https:yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
      },
      medium: {
        url: 'https:yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
      },
      high: {
        url: 'https:yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
      },
    },
    channelTitle: 'Wizeline',
    liveBroadcastContent: 'upcoming',
    publishTime: '2014-09-27T01:39:18Z',
  },
};

const mockGlobalState = {
  searchValue: '',
  currentVideo: sigleVideo,
};
let mockGet;

beforeEach(() => {
  mockGet = jest.spyOn(axiosInstance(), 'get');
  window.scrollTo = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders content', () => {
  mockGet.mockImplementation(() => {
    return {
      response: {
        status: 200,
        data: mockResult,
      },
    };
  });
  const { getByTestId } = customRender(
    <BrowserRouter>
      <VideoPlayer />
    </BrowserRouter>,
    mockGlobalState,
    jest.fn()
  );
  expect(getByTestId('video_Iframe')).toBeInTheDocument();
});

test('renders the list of videos', () => {
  mockGet.mockImplementation(() => {
    return {
      response: {
        status: 200,
        data: mockResult,
      },
    };
  });
  const { getAllByTestId } = customRender(
    <BrowserRouter>
      <VideoPlayer />
    </BrowserRouter>,
    mockGlobalState,
    jest.fn()
  );

  setTimeout(() => {
    expect(getAllByTestId('video-card').length).toEqual(mockResult.items.length);
  }, 1000);
});

test('renders a error message', () => {
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
      <VideoPlayer />
    </BrowserRouter>,
    mockGlobalState,
    jest.fn()
  );
  setTimeout(() => {
    expect(queryByText('Sorry, there was an an error :(')).toBeInTheDocument();
  }, 1000);
});

test('renders the loader', () => {
  mockGet.mockImplementation(() => Promise.resolve(mockResult));
  const { getAllByTestId } = customRender(
    <BrowserRouter>
      <VideoPlayer />
    </BrowserRouter>,
    mockGlobalState,
    jest.fn()
  );
  expect(getAllByTestId('preloader-card').length).toEqual(MAX_RESUTS_ON_SEARCH);
});
