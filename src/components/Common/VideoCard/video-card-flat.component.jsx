import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import helper from '../../../utils/helpers';
import {
  VideoCardFlatWrapper,
  SideImage,
  CardMutedText,
} from './Styled/styled-components';

const VideoCardFlat = (props) => {
  const { thumbnalURL, title, channelTitle, publishTime, index, onClick, videoId } =
    props;
  return (
    <Fragment>
      <Link
        to={`/player/${videoId}`}
        className="decoration-none"
        data-testid="video-flat-card"
      >
        <VideoCardFlatWrapper
          className="d-flex"
          style={{ animationDelay: `${index * (1 / 18)}s` }}
          onClick={onClick}
        >
          <SideImage src={thumbnalURL} className="card-img-top" alt="Video thumbnail" />
          <div className="ms-2 ">
            <p className=" m-0">{title}</p>
            <CardMutedText className="m-0  text-xs">
              {channelTitle} &bull; {helper.formatDate(publishTime)}
            </CardMutedText>
          </div>
        </VideoCardFlatWrapper>
      </Link>
    </Fragment>
  );
};

export default VideoCardFlat;
