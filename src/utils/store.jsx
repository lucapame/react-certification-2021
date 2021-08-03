import React, { createContext, useReducer } from 'react';
import { SET_CURRENT_VIDEO, SET_SEARCH_VALUE } from './action-types';

// Reducer for hook state and actions
const Reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: payload };
    case SET_CURRENT_VIDEO:
      return { ...state, currentVideo: payload };
    default:
      throw new Error('invalid action');
  }
};
const initialState = {
  searchValue: '',
  currentVideo: null,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

export const Context = createContext(initialState);
export default Store;
