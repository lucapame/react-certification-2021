import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import formatter from '../../utils/formatter';

const VideoCardFlat = (props) => {
  const { snippet } = props;
  return (
    <Fragment>
      <Link
        to="/player"
        className="d-flex align-items-center video-card-flat decoration-none"
      >
        <img src={snippet.thumbnails.medium.url} className="card-img-top" alt="..." />
        <div className="ms-2 ">
          <p className=" m-0">{snippet.title}</p>
          <p className="m-0 text-lead text-xs">
            {snippet.channelTitle} &bull; {formatter.formatDate(snippet.publishTime)}
          </p>
        </div>
      </Link>
    </Fragment>
  );
};

export default VideoCardFlat;
