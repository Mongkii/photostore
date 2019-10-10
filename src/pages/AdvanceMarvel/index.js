import React, { useState } from 'react';
import {
  Wrapper,
  Content,
  VideoWrapper,
  StyledVideo,
  Logo,
  ButtonWrapper,
} from './style';
import { StyledButton } from '../../components/style';
import intro from './assets/intro.mp4';

const AdvanceMarvel = () => {
  const [animated, setAnimated] = useState(false);

  const handlePlay = () => {
    setAnimated(true);
  };

  const handleReplay = () => {
    setAnimated(false);
    setTimeout(() => {
      setAnimated(true);
    }, 0);
  };
  
  return (
    <Wrapper>
      <Content>
        <VideoWrapper>
          {animated && (
            <>
              <StyledVideo src={intro} type="video/mp4" height={450} autoPlay />
              <Logo>MARVEL</Logo>
            </>
          )}
        </VideoWrapper>
        <ButtonWrapper>
          <StyledButton
            type="primary"
            onClick={animated ? handleReplay : handlePlay}
          >
            {animated ? '重播' : '播放'}
          </StyledButton>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default AdvanceMarvel;
