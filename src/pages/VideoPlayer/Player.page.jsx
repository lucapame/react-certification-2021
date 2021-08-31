import React, { useContext } from 'react';
import { useParams } from 'react-router';
import Loader from '../../components/Common/loader/loader.component';
import VideoCard from '../../components/Common/VideoCard/video-card.component';
import { SET_CURRENT_VIDEO } from '../../utils/action-types';
import helper from '../../utils/helpers';
import { useVideo } from '../../utils/hooks/useVideo';
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
  const { videos, loading, error } = useVideo(null, videoURL);
  return (
    state.currentVideo && (
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

          {!loading && !error && videos && (
            <VideoListContained className="col-12 col-lg-3  ">
              <p className="fw-bold">More like this</p>
              {videos.items.map((video, index) => {
                return (
                  video.snippet && (
                    <VideoCard
                      isFlatCard="true"
                      key={video.etag}
                      etag={video.etag}
                      onClick={() =>
                        dispatch({ type: SET_CURRENT_VIDEO, payload: video })
                      }
                      index={index}
                      videoId={video.id.videoId}
                      thumbnalURL={video.snippet.thumbnails.medium.url}
                      title={video.snippet.title}
                      channelTitle={video.snippet.channelTitle}
                      publishTime={video.snippet.publishTime}
                      fullVideo={video}
                    />
                  )
                );
              })}
            </VideoListContained>
          )}

          {loading && (
            <VideoListContained className="col-12 col-lg-3  ">
              <Loader isFlatCard="true" />
            </VideoListContained>
          )}
          {error && (
            <div className="text-center d-flex justify-content-center">
              <p className="h3 fw-light ">Sorry, there was an an error :( </p>
            </div>
          )}
        </div>
      </VideoPlayerWsrpper>
    )
  );
};

export default VideoPlayer;
