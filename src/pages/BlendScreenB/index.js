import React, { useState } from 'react';
import {
  Wrapper,
  ItemWrapper,
  VideoChoice,
  Background,
  Text,
  StyledButton,
} from './style';
import firework from './assets/firework.mp4';

const answers = ['11', '2', '10'];

const BlendScreenB = () => {
  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const handleClick = () => {
    setIsAnswerRight(true);
  };
  return (
    <Wrapper>
      <ItemWrapper>
        <Background>
          <Text>{isAnswerRight ? '恭喜你，答对了' : '1 + 1 = ?'}</Text>
          {answers.map((answer) => (
            <StyledButton ghost onClick={handleClick}>
              {answer}
            </StyledButton>
          ))}
        </Background>
        {isAnswerRight && (
          <VideoChoice
            src={firework}
            type="video/mp4"
            height={640}
            autoPlay
            loop
          />
        )}
      </ItemWrapper>
    </Wrapper>
  );
};

export default BlendScreenB;
