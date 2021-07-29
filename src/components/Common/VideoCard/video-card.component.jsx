import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import formatter from '../../../utils/formatter';
import { CardMutedText, TopImage, VideoCardWrapper } from './Styled/styled-components';

const VideoCard = (props) => {
  const { thumbnalURL, title, channelTitle, publishTime } = props;
  return (
    <Fragment>
      <Link to="/player" className="decoration-none" data-testid="video-card">
        <VideoCardWrapper className="card">
          <TopImage src={thumbnalURL} className="card-img-top" alt="Video thumbnail" />
          <div className="card-body px-0">
            <h5 className="card-title">{title}</h5>
            <CardMutedText className="m-0">
              {channelTitle} &bull; {formatter.formatDate(publishTime)}
            </CardMutedText>
          </div>
        </VideoCardWrapper>
      </Link>
    </Fragment>
  );
};

export default VideoCard;
