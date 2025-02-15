import React, { useEffect, useState, useContext } from 'react';
import PortalModal from '../../components/Common/Modal/portal-modal';
import { ColorfulText } from '../../components/Common/StyledComponets';
import VideoCard from '../../components/Common/VideoCard/video-card.component';
import helpers from '../../utils/helpers';
import { useFavoriteVideo } from '../../utils/hooks/useFavoriteVideo';
import { Context } from '../../utils/store';
import { Player, VideoPlayerContainer } from './Styled/styled-components';

const FavoritesPage = () => {
  const [state] = useContext(Context);
  const { fetchVideos } = useFavoriteVideo();
  const [openp, setOpenP] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <div className="container my-3">
      <ColorfulText className="display-4 fw-bold  text-center">
        Your favorites
      </ColorfulText>
      <p className="text-center lead">Everything you love, you&apos;ll find it here</p>
      <div className="my-3 container">
        {state.favoriteVideos && state.favoriteVideos.length > 0 ? (
          <div className="video-list row row-cols-1 row-cols-md-2 row-cols-lg-4">
            {state.favoriteVideos.map((video, index) => {
              return (
                <VideoCard
                  notLink
                  key={video.etag}
                  etag={video.etag}
                  onClick={() => {
                    setCurrentVideo(video);
                    setOpenP(true);
                  }}
                  index={index}
                  videoId={video.videoId}
                  thumbnalURL={video.thumbnalURL}
                  title={video.title}
                  channelTitle={video.channelTitle}
                  publishTime={video.publishTime}
                  fullVideo={video}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center fw-bold mt-5">You don&apos;t have videos yet.</div>
        )}
      </div>

      {openp && (
        <PortalModal
          message="Hello Portal World!"
          isOpen={openp}
          onClose={() => setOpenP(false)}
        >
          {currentVideo && (
            <div>
              <VideoPlayerContainer>
                <Player
                  data-testid="video_Iframe"
                  title="Doja Cat - Kiss Me More (Official Video) ft. SZA"
                  src={`https://www.youtube.com/embed/${currentVideo.videoId}`}
                  alt="video_content"
                />
              </VideoPlayerContainer>
              <h3 className="m-0">{currentVideo.title}</h3>
              <p className="m-0 text-lead">
                {currentVideo.channelTitle} &bull;{' '}
                {helpers.formatDate(currentVideo.publishTime)}
              </p>

              {currentVideo.videoURL}
            </div>
          )}
        </PortalModal>
      )}
    </div>
  );
};

export default FavoritesPage;
