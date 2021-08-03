import React, { useContext } from 'react';
import { Redirect, useParams } from 'react-router';
import VideoCardFlat from '../../components/Common/VideoCard/video-card-flat.component';
import { SET_CURRENT_VIDEO } from '../../utils/action-types';
import { MAX_RESUTS_ON_SEARCH } from '../../utils/constants';
import helper from '../../utils/helpers';
import { useYoutubeQuery } from '../../utils/hooks/useYoutubeQuery';
import { Context } from '../../utils/store';
import {
  Player,
  VideoListContained,
  VideoPlayerContainer,
  VideoPlayerWsrpper,
  PlaceholderContainer,
  Preloader,
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
                <div className="my-3" key={video.etag}>
                  <VideoCardFlat
                    onClick={() => dispatch({ type: SET_CURRENT_VIDEO, payload: video })}
                    index={index}
                    videoId={video.id.videoId}
                    thumbnalURL={video.snippet.thumbnails.medium.url}
                    title={video.snippet.title}
                    channelTitle={video.snippet.channelTitle}
                    publishTime={video.snippet.publishTime}
                  />
                </div>
              );
            })}
          </VideoListContained>
        );

      case 'loading':
        return (
          <VideoListContained className="col-12 col-lg-3  ">
            {Array.from(Array(MAX_RESUTS_ON_SEARCH)).map((x, index) => (
              <Preloader
                className="my-3"
                key={`item ${helper.generateUid()}`}
                data-testid="preloader-card"
              >
                <PlaceholderContainer
                  style={{ animationDelay: `${index * (1 / 18)}s` }}
                />
              </Preloader>
            ))}
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
          <VideoPlayerContainer className="video-payer">
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
