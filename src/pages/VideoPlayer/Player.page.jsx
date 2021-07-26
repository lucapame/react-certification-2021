import React, { Fragment } from 'react';
import VideoCardFlat from '../../components/Common/video-card-flat.component';
import formatter from '../../utils/formatter';
import { getVideosList } from '../../utils/mock-data';

const VideoPlayer = () => {
  window.scrollTo(0, 0);
  return (
    <Fragment>
      <div className="container-fluid h-100">
        <div className="row mt-4">
          <div className="col-12  col-lg-9">
            <div className="video-payer">
              <iframe
                title="Doja Cat - Kiss Me More (Official Video) ft. SZA"
                src="https://www.youtube.com/embed/0EVVKs6DQLo"
              />
            </div>
            <h3 className="m-0">Doja Cat - Kiss Me More (Official Video) ft. SZA</h3>
            <p className="m-0 text-lead">
              Doja Cat - Vevo &bull; {formatter.formatDate('2019-03-05T03:52:55Z')}
            </p>
          </div>
          <div className="col-12 col-lg-3 video-list-contained mt-4 mt-md-0">
            <p className="fw-bold">More like this</p>
            {getVideosList().items.map((video) => {
              return (
                <div className="my-3" key={video.etag}>
                  <VideoCardFlat {...video} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoPlayer;
