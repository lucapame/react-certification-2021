import React, { useContext } from 'react';
import VideoCard from '../../components/Common/VideoCard/video-card.component';
import { HeaderCard } from './Styled/styled-components';
import { useVideo } from '../../utils/hooks/useVideo';
import { Context } from '../../utils/store';
import { SET_CURRENT_VIDEO } from '../../utils/action-types';
import Loader from '../../components/Common/loader/loader.component';
import { useAuth } from '../../providers/Auth';

function HomePage() {
  const [state, dispatch] = useContext(Context);
  const { videos, error, loading } = useVideo(state.searchValue);
  const { authenticated, user } = useAuth();

  return (
    <div className="container">
      <HeaderCard className="mb-4 text-center">
        <h1 className="fw-bold mb-2 display-3 text-white ">
          {authenticated ? `Hey ${user?.name}, welcome back` : 'Hey there!'}
        </h1>
        <p className="text-white h4 ">
          Find the videos that you love and discover the one that will blow your mind.
        </p>
      </HeaderCard>
      {!loading && !error && (
        <div className="video-list row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4">
          {videos.items.map((video, index) => {
            return (
              <VideoCard
                key={video.etag}
                etag={video.etag}
                onClick={() => dispatch({ type: SET_CURRENT_VIDEO, payload: video })}
                index={index}
                videoId={video.id.videoId}
                thumbnalURL={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
                channelTitle={video.snippet.channelTitle}
                publishTime={video.snippet.publishTime}
                fullVideo={video}
              />
            );
          })}
        </div>
      )}

      {loading && (
        <div className="video-list row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4">
          <Loader />
        </div>
      )}
      {error && (
        <div className="text-center d-flex justify-content-center">
          <p className="h3 fw-light ">Sorry, there was an an error :( </p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
