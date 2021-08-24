import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoCard from './video-card.component';
import Store from '../../../utils/store';
import { AuthContext } from '../../../providers/Auth/Auth.provider';

test('renders content', async () => {
  const props = {
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
  };
  const mockedUser = {
    id: '123',
    name: 'Luis Carlos ',
    avatarUrl:
      'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  };
  const { getByAltText, getByText, queryByText, getByTestId } = await render(
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          login: jest.fn(),
          logout: jest.fn(),
          authenticated: true,
          user: mockedUser,
        }}
      >
        <Store>
          <VideoCard
            thumbnalURL={props.snippet.thumbnails.medium.url}
            title={props.snippet.title}
            channelTitle={props.snippet.channelTitle}
            publishTime={props.snippet.publishTime}
          />
        </Store>
      </AuthContext.Provider>
    </BrowserRouter>
  );

  // renders the image
  expect(getByAltText('Video thumbnail')).toBeInTheDocument();
  // renders the title on the video
  expect(getByText(/Video Tour | Welcome to Wizeline Guadalajara/i)).toBeInTheDocument();
  // renders the channel and the date title on the video
  expect(queryByText(/Wizeline • 30 Sept 2019/i)).toBeInTheDocument();
  // renders the favorite video
  expect(getByTestId('favorite-button')).toBeInTheDocument();
});
