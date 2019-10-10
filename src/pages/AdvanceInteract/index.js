import React, { useState } from 'react';
import {
  Wrapper,
  ShowcaseArea,
  ShowcaseWrapper,
  Image,
  ImageBlurred,
  MaskImage,
  ButtonArea,
} from './style';
import { StyledButton } from '../../components/style';
import man from './assets/man.png';

const AdvanceInteract = () => {
  const [showMask, setShowMask] = useState(false);
  const [showBlur, setShowBlur] = useState(true);
  const [maskPosition, setMaskPosition] = useState([-75, -75]);
  const handleMouseMove = (event) => {
    const { nativeEvent } = event;
    const { offsetX, offsetY } = nativeEvent;
    setMaskPosition([offsetX - 75, offsetY - 75]);
  };
  const styleMaskPosition = `center, ${maskPosition[0]}px ${maskPosition[1]}px`;
  return (
    <Wrapper>
      <ShowcaseArea>
        <ShowcaseWrapper>
          <Image src={man} />
          {showBlur && (
            <ImageBlurred
              src={man}
              onMouseMove={handleMouseMove}
              style={{ WebkitMaskPosition: styleMaskPosition }}
            />
          )}
        </ShowcaseWrapper>
        {showMask && (
          <ShowcaseWrapper>
            <MaskImage
              style={{
                top: `${maskPosition[1]}px`,
                left: `${maskPosition[0]}px`,
              }}
            />
          </ShowcaseWrapper>
        )}
      </ShowcaseArea>
      <ButtonArea>
        <StyledButton
          type="primary"
          onClick={() => {
            if (showBlur) {
              setShowMask(false);
            }
            setShowBlur(!showBlur);
          }}
        >
          {showBlur ? '变清晰' : '变模糊'}
        </StyledButton>
        <StyledButton
          ghost
          onClick={() => {
            if (!showMask) {
              setShowBlur(true);
            }
            setShowMask(!showMask);
          }}
        >
          {showMask ? '关闭原理' : '显示原理'}
        </StyledButton>
      </ButtonArea>
    </Wrapper>
  );
};

export default AdvanceInteract;
