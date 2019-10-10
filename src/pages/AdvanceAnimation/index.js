import React, { useState } from 'react';
import {
  Wrapper,
  Content,
  GifWrapper,
  AnimatedText,
  ButtonWrapper,
  StyledHighlight,
} from './style';
import { StyledButton } from '../../components/style';

const AdvanceAnimation = () => {
  const [animated, setAnimated] = useState(false);
  return (
    <Wrapper>
      <Content>
        <GifWrapper animated={animated}>
          <AnimatedText animated={animated}>祝你幸福每一天</AnimatedText>
          <ButtonWrapper>
            <StyledButton
              type="primary"
              onClick={() => {
                setAnimated(!animated);
              }}
            >
              {animated ? '快停下' : '动起来'}
            </StyledButton>
          </ButtonWrapper>
        </GifWrapper>
        {animated && (
          <StyledHighlight className="css">
            {`animation: hue 3s linear infinite;
  @keyframes hue {
    0% {
      filter: hue-rotate(0);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }`}
          </StyledHighlight>
        )}
      </Content>
    </Wrapper>
  );
};

export default AdvanceAnimation;
