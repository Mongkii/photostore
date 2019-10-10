import React, { useState } from 'react';
import {
  Wrapper,
  Showcase,
  ImageForShowcase,
  PreviewWrapper,
  ImageForPreview,
} from './style';

const colors = ['', 'crimson', 'blue', 'green', 'cyan'];

const BlendHue = () => {
  const [curColor, setCurColor] = useState(colors[0]);

  return (
    <Wrapper>
      <Showcase>
        <ImageForShowcase color={curColor} />
        <PreviewWrapper>
          {colors.map((color) => (
            <ImageForPreview
              key={color}
              color={color}
              onClick={() => {
                setCurColor(color);
              }}
              active={color === curColor}
            />
          ))}
        </PreviewWrapper>
      </Showcase>
    </Wrapper>
  );
};

export default BlendHue;
