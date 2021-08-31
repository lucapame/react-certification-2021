import { useEffect, useReducer } from 'react';
import {
  FETCH_VIDEOS,
  FETCH_VIDEOS_ERROR,
  FETCH_VIDEOS_SUCCESS,
  SET_CURRENT_VIDEO,
} from '../action-types';
// import { mockData } from '../mock-data';

import axiosInstance from './axios-instance';

// Reducer for hook state and actions
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_VIDEOS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload,
      };
    case FETCH_VIDEOS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SET_CURRENT_VIDEO:
      return {
        ...state,
        video: payload,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
};

export const initialState = {
  status: 'idle',
  loading: true,
  error: false,
  videos: [],
  video: null,
};

const useVideo = (query, videoId = null) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    let isMounted = true;

    dispatch({ type: FETCH_VIDEOS });

    const api = axiosInstance(videoId);
    api
      .get('/search', {
        params: { q: query },
      })
      .then((response) => {
        if (isMounted) dispatch({ type: 'FETCH_VIDEOS_SUCCESS', payload: response.data }); // add conditional check
      })
      .catch((err) => {
        dispatch({ type: FETCH_VIDEOS_ERROR, payload: err.message });
      });

    // if (isMounted)
    //   setTimeout(() => {
    //     dispatch({ type: FETCH_VIDEOS_SUCCESS, payload: mockData });
    //   }, 2000);

    return () => {
      isMounted = false;
    };
  }, [query, videoId]);
  return state;
};

export { useVideo };
