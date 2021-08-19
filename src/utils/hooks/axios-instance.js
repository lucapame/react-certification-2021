import axios from 'axios';
import { MAX_RESUTS_ON_SEARCH } from '../constants';

const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    type: 'video',
    order: 'relevance',
    maxResults: MAX_RESUTS_ON_SEARCH,
    key: process.env.REACT_APP_YOUTUBE_KEY,
  },
});

export default axiosInstance;
