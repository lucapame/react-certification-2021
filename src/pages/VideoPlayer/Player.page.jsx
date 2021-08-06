import React, { useContext } from 'react';
import { Redirect, useParams } from 'react-router';
import Loader from '../../components/Common/loader/loader.component';
import VideoCard from '../../components/Common/VideoCard/video-card.component';
import { SET_CURRENT_VIDEO } from '../../utils/action-types';
import helper from '../../utils/helpers';
import { useYoutubeQuery } from '../../utils/hooks/useYoutubeQuery';
import { Context } from '../../utils/store';
import {
  Player,
  VideoListContained,
  VideoPlayerContainer,
  VideoPlayerWsrpper,
} from './Styled/styled-components';

const VideoPlayer = () => {
  const { videoURL } = useParams();
  const [state, dispatch] = useContext(Context);

  const { currentVideo } = state;
  window.scrollTo(0, 0);

  const { data, status } = useYoutubeQuery(state.searchValue);

  const getList = () => {
    switch (status) {
      case 'success':
        return (
          <VideoListContained className="col-12 col-lg-3  ">
            <p className="fw-bold">More like this</p>
            {data.items.map((video, index) => {
              return (
                <VideoCard
                  isFlatCard="true"
                  key={video.etag}
                  onClick={() => dispatch({ type: SET_CURRENT_VIDEO, payload: video })}
                  index={index}
                  videoId={video.id.videoId}
                  thumbnalURL={video.snippet.thumbnails.medium.url}
                  title={video.snippet.title}
                  channelTitle={video.snippet.channelTitle}
                  publishTime={video.snippet.publishTime}
                />
              );
            })}
          </VideoListContained>
        );

      case 'loading':
        return (
          <VideoListContained className="col-12 col-lg-3  ">
            <Loader isFlatCard="true" />
          </VideoListContained>
        );

      case 'error':
        return (
          <div className="text-center d-flex justify-content-center">
            <p className="h3 fw-light ">Sorry, there was an an error :(</p>
          </div>
        );

      default:
        break;
    }
  };

  return state.currentVideo ? (
    <VideoPlayerWsrpper className="container-fluid ">
      <div className="row ">
        <div className="col-12  col-lg-9 mb-2">
          <VideoPlayerContainer>
            <Player
              data-testid="video_Iframe"
              title="Doja Cat - Kiss Me More (Official Video) ft. SZA"
              src={`https://www.youtube.com/embed/${videoURL}`}
              alt="video_content"
            />
          </VideoPlayerContainer>
          <h3 className="m-0">{currentVideo.snippet.title}</h3>
          <p className="m-0 text-lead">
            {currentVideo.snippet.channelTitle} &bull;{' '}
            {helper.formatDate(currentVideo.snippet.publishTime)}
          </p>
        </div>

        {getList()}
      </div>
    </VideoPlayerWsrpper>
  ) : (
    <Redirect to="/" />
  );
};

export default VideoPlayer;
