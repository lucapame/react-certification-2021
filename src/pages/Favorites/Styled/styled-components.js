import styled from 'styled-components';

export const VideoPlayerContainer = styled.div`
  position: relative;
  padding-bottom: 60.25%;
  padding-top: 15px;
  height: 0;
  background-color: var(--bg-color);

  @media (max-height: 380px) {
    padding-bottom: 30.25%;
  }
`;
export const Player = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius);
`;
