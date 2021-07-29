import React from 'react';
import VideoCardFlat from '../../components/Common/VideoCard/video-card-flat.component';
import formatter from '../../utils/formatter';
import { getVideosList } from '../../utils/mock-data';
import {
  Player,
  VideoListContained,
  VideoPlayerContainer,
  VideoPlayerWsrpper,
} from './Styled/styled-components';

const VideoPlayer = () => {
  window.scrollTo(0, 0);
  return (
    <VideoPlayerWsrpper className="container-fluid ">
      <div className="row ">
        <div className="col-12  col-lg-9">
          <VideoPlayerContainer className="video-payer">
            <Player
              title="Doja Cat - Kiss Me More (Official Video) ft. SZA"
              src="https://www.youtube.com/embed/0EVVKs6DQLo"
            />
          </VideoPlayerContainer>
          <h3 className="m-0">Doja Cat - Kiss Me More (Official Video) ft. SZA</h3>
          <p className="m-0 text-lead">
            Doja Cat - Vevo &bull; {formatter.formatDate('2019-03-05T03:52:55Z')}
          </p>
        </div>
        <VideoListContained className="col-12 col-lg-3  ">
          <p className="fw-bold">More like this</p>
          {getVideosList().items.map((video) => {
            return (
              <div className="my-3" key={video.etag}>
                <VideoCardFlat
                  thumbnalURL={video.snippet.thumbnails.medium.url}
                  title={video.snippet.title}
                  channelTitle={video.snippet.channelTitle}
                  publishTime={video.snippet.publishTime}
                />
              </div>
            );
          })}
        </VideoListContained>
      </div>
    </VideoPlayerWsrpper>
  );
};

export default VideoPlayer;
