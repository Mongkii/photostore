import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
`;

export const IframeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80%;
  background-color: #ffffff;
`;

export const StyledIframe = styled.iframe`
  flex: none;
  width: 125%;
  height: 125%;
  transform: scale(0.8);
`;

export const SliderWrapper = styled.div`
  flex: none;
  width: 90%;
`;
