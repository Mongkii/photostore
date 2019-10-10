import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
`;

export const Content = styled.div`
  flex: none;
  position: relative;
  width: 800px;
`;

export const VideoWrapper = styled.div`
  position: relative;
  height: 450px;
  background-color: #000000;
  overflow: hidden;
  isolation: isolate;
`;

const cssAbsoluteCenter = `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const StyledVideo = styled.video`
  ${cssAbsoluteCenter}
`;

export const Logo = styled.div`
  ${cssAbsoluteCenter}
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 160px;
  font-family: 'HeadLineA';
  color: #000000;
  background-color: #ffffff;
  transform: scale(15);
  mix-blend-mode: screen;
  animation: zoom 5s linear forwards;
  @keyframes zoom {
    0% {
      transform: scale(15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;
