import React, { createContext, useEffect, useReducer } from 'react';
import {
  DELETE_FAVORITE_VIDEO,
  FETCH_FAVORITE_VIDEOS,
  SET_CURRENT_VIDEO,
  SET_FAVORITE_VIDEO,
  SET_SEARCH_VALUE,
  SET_THEME,
} from './action-types';
import { storage } from './storage';

// Reducer for hook state and actions
const Reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_THEME:
      return { ...state, theme: payload };
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: payload };
    case SET_CURRENT_VIDEO:
      return { ...state, currentVideo: payload };
    case FETCH_FAVORITE_VIDEOS:
      return { ...state, favoriteVideos: payload };
    case SET_FAVORITE_VIDEO:
      return {
        ...state,
        favoriteVideos: [payload, ...state.favoriteVideos],
      };
    case DELETE_FAVORITE_VIDEO:
      return { ...state, currentVideo: payload };
    default:
      throw new Error('invalid action');
  }
};
const initialState = {
  theme: 'light',
  searchValue: '',
  currentVideo: null,
  loading: true,
  favoriteVideos: [],
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    if (state.currentVideo) {
      storage.set('currentVideo', JSON.stringify(state.currentVideo));
    } else {
      const video = storage.get('currentVideo');
      if (video) dispatch({ type: SET_CURRENT_VIDEO, payload: JSON.parse(video) });
      else storage.remove('currentVideo');
    }

    if (state.favoriteVideos && state.favoriteVideos.length > 0) {
      storage.set('favoriteVideosList', JSON.stringify(state.favoriteVideos));
    }
  }, [state.currentVideo, state.favoriteVideos]);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export const Context = createContext(initialState);
export default Store;
