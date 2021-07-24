import React, { Fragment } from 'react';
import VideoCard from '../../components/Common/video-card.component';
import { getVideosList } from '../../utils/mock-data';

function HomePage() {
  return (
    <Fragment>
      <div className="container ">
        <div className="header-card card my-5 ">
          <h1 className="fw-bold m-0 display-1 text-white">Discover</h1>
          <p className="text-white">
            Find the videos that you love and probably will blow your mind.
          </p>
        </div>

        <div className="video-list row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4">
          {getVideosList().items.map((video) => {
            return (
              <div className="col my-1" key={video.etag}>
                <VideoCard {...video} />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
