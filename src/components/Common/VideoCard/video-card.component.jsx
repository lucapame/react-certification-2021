import React from 'react';
import helper from '../../../utils/helpers';
import {
  CardImage,
  CardMutedText,
  CardTitle,
  VideoCardWrapper,
} from './Styled/styled-components';

const VideoCard = (props) => {
  const {
    thumbnalURL,
    title,
    channelTitle,
    publishTime,
    index,
    videoId,
    onClick,
    isFlatCard,
  } = props;
  return (
    <VideoCardWrapper
      to={`/player/${videoId}`}
      className="decoration-none"
      data-testid="video-card"
      onClick={onClick}
      flat={isFlatCard}
      animationdelay={index}
    >
      <CardImage
        flat={isFlatCard}
        src={thumbnalURL}
        className="card-img-top"
        alt="Video thumbnail"
      />
      <div className="px-2">
        <CardTitle flat={isFlatCard}>{title}</CardTitle>
        <CardMutedText className="m-0">
          {channelTitle} &bull; {helper.formatDate(publishTime)}
        </CardMutedText>
      </div>
    </VideoCardWrapper>
  );
};

export default VideoCard;
