import { useCallback, useContext, useEffect } from 'react';
import { FETCH_FAVORITE_VIDEOS, SET_FAVORITE_VIDEO } from '../action-types';
import { storage } from '../storage';
import { Context } from '../store';

const useFavoriteVideo = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    const cachedVideoList = storage.get('favoriteVideosList');
    if (cachedVideoList)
      dispatch({ type: FETCH_FAVORITE_VIDEOS, payload: JSON.parse(cachedVideoList) });
  }, [dispatch]);

  const setVideo = useCallback(
    (video) => {
      dispatch({ type: SET_FAVORITE_VIDEO, payload: video });
    },
    [dispatch]
  );

  const deleteVideo = useCallback(
    (video) => {
      dispatch({ type: SET_FAVORITE_VIDEO, payload: video });
    },
    [dispatch]
  );

  const fetchVideos = useCallback(() => {
    const cachedVideoList = storage.get('favoriteVideosList');
    dispatch({ type: FETCH_FAVORITE_VIDEOS, payload: JSON.parse(cachedVideoList) });
  }, [dispatch]);

  const checkFavorites = useCallback(
    (etag) => {
      if (state.favoriteVideos) {
        if (state.favoriteVideos.find((video) => video.etag === etag)) {
          return true;
        }
      }
      return false;
    },
    [state.favoriteVideos]
  );

  return { setVideo, checkFavorites, fetchVideos, deleteVideo };
};

export { useFavoriteVideo };
