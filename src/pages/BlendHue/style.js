import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import keyboard from './assets/keyboard.jpg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
`;

const ColoredImageWrapper = styled.div`
  flex: none;
  position: relative;
  isolation: isolate;
  img {
    width: 100%;
    height: 100%;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ color }) => color || 'transparent'};
    mix-blend-mode: hue;
  }
`;

const ColoredImage = ({ className, color, ...restProps }) => (
  <ColoredImageWrapper className={className} color={color} {...restProps}>
    <img src={keyboard} alt="product" />
  </ColoredImageWrapper>
);

ColoredImage.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

export const Showcase = styled.div`
  flex: none;
  width: 819px;
`;

export const ImageForShowcase = styled(ColoredImage)`
  width: 100%;
  height: 461px;
`;

export const PreviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const ImageForPreview = styled(ColoredImage)`
  width: 155px;
  height: 87px;
  cursor: pointer;
  &:hover {
    filter: contrast(120%);
  }
  ${({ active }) =>
    active
      ? `
  outline: 2px solid #999999;
  outline-offset: 3px;`
      : ''}
`;
