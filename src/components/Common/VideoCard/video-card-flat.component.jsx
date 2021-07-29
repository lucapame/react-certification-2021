import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import formatter from '../../../utils/formatter';
import {
  VideoCardFlatWrapper,
  SideImage,
  CardMutedText,
} from './Styled/styled-components';

const VideoCardFlat = (props) => {
  const { thumbnalURL, title, channelTitle, publishTime } = props;
  return (
    <Fragment>
      <Link to="/player" className="decoration-none">
        <VideoCardFlatWrapper className="d-flex">
          <SideImage src={thumbnalURL} className="card-img-top" alt="Video thumbnail" />
          <div className="ms-2 ">
            <p className="h5 m-0">{title}</p>
            <CardMutedText className="m-0  text-xs">
              {channelTitle} &bull; {formatter.formatDate(publishTime)}
            </CardMutedText>
          </div>
        </VideoCardFlatWrapper>
      </Link>
    </Fragment>
  );
};

export default VideoCardFlat;
