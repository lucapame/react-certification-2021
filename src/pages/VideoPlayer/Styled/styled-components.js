import styled from 'styled-components';

export const VideoPlayerWsrpper = styled.div`
  @media (max-width: 600px) {
    overflow-y: hidden;
  }
  height: calc(100vh - 8vh);
`;

export const VideoPlayerContainer = styled.div`
  position: relative;
  padding-bottom: 50.25%;
  padding-top: 15px;
  height: 0;
`;
export const Player = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 95%;
  border-radius: var(--border-radius);
`;

export const VideoListContained = styled.div`
  height: calc(100vh - 8vh);
  overflow-y: scroll;
  background-color: var(--bg-color);
  @media (max-width: 600px) {
    height: calc(55vh);
  }
`;
