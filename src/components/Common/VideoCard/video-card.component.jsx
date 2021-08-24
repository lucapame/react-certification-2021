import React, { useState, useEffect } from 'react';
import { useAuth } from '../../../providers/Auth';
import helper from '../../../utils/helpers';
import { useFavoriteVideo } from '../../../utils/hooks/useFavoriteVideo';
import {
  CardImage,
  CardMutedText,
  CardTitle,
  Icon,
  IconButton,
  LinkWrapper,
  VideoCardWrapper,
} from './Styled/styled-components';

const VideoCard = (props) => {
  const { setVideo, checkFavorites } = useFavoriteVideo();
  const [isFavorite, setIsFavorite] = useState(false);
  const { authenticated } = useAuth();

  const {
    etag,
    thumbnalURL,
    title,
    channelTitle,
    publishTime,
    index,
    videoId,
    onClick,
    isFlatCard,
    fullVideo,
    className,
    notLink,
  } = props;

  const video = {
    etag,
    thumbnalURL,
    title,
    channelTitle,
    publishTime,
    index,
    videoId,
    onClick,
    isFlatCard,
    fullVideo,
  };

  useEffect(() => {
    setIsFavorite(checkFavorites(etag));
  }, [etag, checkFavorites, isFavorite]);
  return (
    <VideoCardWrapper
      className={`${className} decoration-none position-relative`}
      data-testid="video-card"
      onClick={onClick}
      flat={isFlatCard}
      animationdelay={index}
    >
      <LinkWrapper
        to={`${!notLink ? `/player/${videoId}` : '#'}`}
        className="decoration-none position-relative"
        flat={isFlatCard}
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
      </LinkWrapper>

      {authenticated && (
        <IconButton
          data-testid="favorite-button"
          iconDesc={isFavorite ? 'On your favorites' : 'Add to favorites'}
          flat={isFlatCard}
          onClick={() => setVideo(video)}
        >
          {isFavorite ? (
            <Icon active className="fas fa-heart" />
          ) : (
            <Icon className="far fa-heart" />
          )}
        </IconButton>
      )}
    </VideoCardWrapper>
  );
};

export default VideoCard;
