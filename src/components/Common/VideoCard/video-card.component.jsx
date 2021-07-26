import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import formatter from '../../../utils/formatter';

const VideoCard = (props) => {
  const { snippet } = props;
  return (
    <Fragment>
      <Link
        to="/player"
        className="card video-card decoration-none"
        data-testid="video-card"
      >
        <img
          src={snippet.thumbnails.medium.url}
          className="card-img-top"
          alt="Video thumbnail"
        />
        <div className="card-body px-0">
          <h5 className="card-title">{snippet.title}</h5>
          <p className="m-0 card-lead">
            {snippet.channelTitle} &bull; {formatter.formatDate(snippet.publishTime)}
          </p>
        </div>
      </Link>
    </Fragment>
  );
};

export default VideoCard;
