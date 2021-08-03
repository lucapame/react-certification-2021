import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import helper from '../../../utils/helpers';
import { CardMutedText, TopImage, VideoCardWrapper } from './Styled/styled-components';

const VideoCard = (props) => {
  const { thumbnalURL, title, channelTitle, publishTime, index, videoId, onClick } =
    props;
  return (
    <Fragment>
      <Link
        to={`/player/${videoId}`}
        className="decoration-none"
        data-testid="video-card"
        onClick={onClick}
      >
        <VideoCardWrapper
          className="card"
          style={{ animationDelay: `${index * (1 / 18)}s` }}
        >
          <TopImage src={thumbnalURL} className="card-img-top" alt="Video thumbnail" />
          <div className="card-body px-0">
            <h5 className="card-title">{title}</h5>
            <CardMutedText className="m-0">
              {channelTitle} &bull; {helper.formatDate(publishTime)}
            </CardMutedText>
          </div>
        </VideoCardWrapper>
      </Link>
    </Fragment>
  );
};

export default VideoCard;
