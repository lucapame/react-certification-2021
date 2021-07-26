import React, { Fragment } from 'react';
import VideoCard from '../../components/Common/VideoCard/video-card.component';
import { getVideosList } from '../../utils/mock-data';

function HomePage() {
  return (
    <Fragment>
      <div className="container ">
        <div className="header-card card my-4 ">
          <h1 className="fw-bold mb-2 display-1 text-white">Hey there!</h1>
          <p className="text-white h4 ">
            Find the videos that you love and discover the one that will blow your mind.
          </p>
        </div>

        {!getVideosList() || !getVideosList().items || !getVideosList().items.length ? (
          <div className="text-center d-flex justify-content-center">
            <p className="h3 fw-light ">Sorry, there is no results to show :(</p>
          </div>
        ) : (
          <div className="video-list row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4">
            {getVideosList().items.map((video) => {
              return (
                <div className="col my-1" key={video.etag}>
                  <VideoCard {...video} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default HomePage;
