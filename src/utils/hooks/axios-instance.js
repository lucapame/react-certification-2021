import axios from 'axios';
import { MAX_RESUTS_ON_SEARCH } from '../constants';

const axiosInstance = (videoId = null) => {
  const queryparams = {
    part: 'snippet',
    type: 'video',
    order: 'relevance',
    maxResults: MAX_RESUTS_ON_SEARCH,
    key: process.env.REACT_APP_YOUTUBE_KEY,
  };

  if (videoId) {
    queryparams.relatedToVideoId = videoId;
  }

  return axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: queryparams,
  });
};

export default axiosInstance;
