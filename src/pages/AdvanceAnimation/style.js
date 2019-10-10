import styled from 'styled-components';
import Highlight from 'react-highlight';
import 'highlight.js/styles/a11y-dark.css';
import rose from './assets/rose.jpg';

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
  width: 600px;
`;

export const GifWrapper = styled.div`
  position: relative;
  height: 417px;
  background: url(${rose}) center/cover no-repeat;
  ${({ animated }) =>
    animated ? 'animation: bling-bling 0.5s steps(1) infinite;' : ''}
  @keyframes bling-bling {
    0% {
      filter: saturate(90%);
    }
    50% {
      filter: saturate(110%);
    }
    100% {
      filter: saturate(100%);
    }
  }
`;

export const AnimatedText = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 80px;
  font-weight: 700;
  font-style: italic;
  font-family: 'Kai';
  line-height: 1;
  color: transparent;
  background-image: linear-gradient(
    to right,
    red,
    yellow,
    lime,
    aqua,
    blue,
    fuchsia
  );
  background-clip: text;
  -webkit-background-clip: text;
  ${({ animated }) => (animated ? 'animation: hue 3s linear infinite;' : '')}
  @keyframes hue {
    0% {
      filter: hue-rotate(0);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: -45px;
  right: 0;
  width: 100%;
  padding: 0 10px;
  text-align: right;
`;

export const StyledHighlight = styled(Highlight)``;
