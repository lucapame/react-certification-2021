import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { MAX_RESUTS_ON_SEARCH, YOUTUBE_KEY } from '../constants';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    type: 'video',
    order: 'relevance',
    maxResults: MAX_RESUTS_ON_SEARCH,
    key: YOUTUBE_KEY,
  },
});

// Reducer for hook state and actions
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'idle':
      return { status: 'idle', data: [], error: undefined };
    case 'loading':
      return { status: 'loading', data: [], error: undefined };
    case 'success':
      return { status: 'success', data: payload, error: undefined };
    case 'error':
      return { status: 'error', data: [], error: payload };
    case 'pageToken':
      return { status: 'error', data: [], error: payload };
    default:
      throw new Error('invalid action');
  }
};

const useYoutubeQuery = (query, videoId) => {
  const initialState = {
    status: query ? 'loading' : 'idle',
    data: [],
    error: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let isMounted = true;

    dispatch({ type: 'loading' });
    api
      .get('/search', {
        params: { q: query, relatedToVideoId: videoId },
      })
      .then((response) => {
        if (isMounted) dispatch({ type: 'success', payload: response.data }); // add conditional check
      })
      .catch((err) => {
        dispatch({ type: 'error', payload: err.message });
      });

    return () => {
      isMounted = false;
    };
  }, [query, videoId]);
  return state;
};

export { useYoutubeQuery };
