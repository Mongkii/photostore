import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import hourglass from './assets/hourglass.jpg';
import star from './assets/star.png';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const ItemWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background-color: #ffffff;
`;

const BasicDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform 0.5s;
`;

const HourglassWrapper = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  isolation: isolate;
`;

const ImageHourglass = styled(BasicDiv)`
  width: 256px;
  height: 256px;
  background: url(${hourglass}) center/cover no-repeat;
  mix-blend-mode: lighten;
  ${({ separate }) => (separate ? 'transform: translateX(-150px);' : '')}
`;

const OverlayHourglass = styled(BasicDiv)`
  width: 256px;
  height: 256px;
  background-color: #e4eff5;
  background-image: linear-gradient(to top, #4172ad 0%, #98caff 100%);
  background-position: 0 -256px;
  background-repeat: no-repeat;
  ${({ separate }) => (separate ? 'transform: translateX(150px);' : '')}
  ${({ animated }) =>
    animated ? 'animation: fill 0.8s ease-in forwards;' : ''}

  @keyframes fill {
    0% {
      background-position: 0 256px;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export const CaseHourglass = ({ separate, animated, ...restProps }) => (
  <HourglassWrapper {...restProps}>
    <OverlayHourglass separate={separate} animated={animated} />
    <ImageHourglass separate={separate} />
  </HourglassWrapper>
);

CaseHourglass.propTypes = {
  separate: PropTypes.bool,
  animated: PropTypes.bool,
};

export const ToolWrapper = styled.div`
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  text-align: center;
`;

const StarWrapper = styled.div`
  width: 100%;
  height: 100%;
  isolation: isolate;
`;

const ImageStar = styled(BasicDiv)`
  width: 350px;
  height: 350px;
  background: url(${star}) center/cover no-repeat;
  mix-blend-mode: lighten;
`;

const OverlayStar = styled(BasicDiv)`
  width: 350px;
  height: 350px;
  background-color: #cccccc;
  background-image: linear-gradient(to right, #fff451, #fbd137);
  background-position: ${({ progress = 0 }) => `-${350 - 3.5 * progress}px`} 0;
  background-repeat: no-repeat;
`;

export const CaseStar = ({ progress, ...restProps }) => (
  <StarWrapper {...restProps}>
    <OverlayStar progress={progress} />
    <ImageStar />
  </StarWrapper>
);

CaseHourglass.propTypes = {
  progress: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
