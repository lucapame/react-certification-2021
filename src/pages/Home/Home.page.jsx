import React, { useContext } from 'react';
import VideoCard from '../../components/Common/VideoCard/video-card.component';
import { HeaderCard } from './Styled/styled-components';
import { useYoutubeQuery } from '../../utils/hooks/useYoutubeQuery';
import { Context } from '../../utils/store';
import { SET_CURRENT_VIDEO } from '../../utils/action-types';
import Loader from '../../components/Common/loader/loader.component';

function HomePage() {
  const [state, dispatch] = useContext(Context);
  const { data, status } = useYoutubeQuery(state.searchValue);

  const getList = () => {
    switch (status) {
      case 'success':
        return (
          <div className="video-list row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4">
            {data.items.map((video, index) => {
              return (
                <VideoCard
                  key={video.etag}
                  onClick={() => dispatch({ type: SET_CURRENT_VIDEO, payload: video })}
                  index={index}
                  videoId={video.id.videoId}
                  thumbnalURL={video.snippet.thumbnails.medium.url}
                  title={video.snippet.title}
                  channelTitle={video.snippet.channelTitle}
                  publishTime={video.snippet.publishTime}
                />
              );
            })}
          </div>
        );

      case 'loading':
        return (
          <div className="video-list row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4">
            <Loader />
          </div>
        );

      case 'error':
        return (
          <div className="text-center d-flex justify-content-center">
            <p className="h3 fw-light ">Sorry, there was an an error :( </p>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className="container">
      <HeaderCard className="mb-4 ">
        <h1 className="fw-bold mb-2 display-1 text-white">Hey there!</h1>
        <p className="text-white h4 ">
          Find the videos that you love and discover the one that will blow your mind.
        </p>
      </HeaderCard>

      {getList()}
    </div>
  );
}

export default HomePage;
