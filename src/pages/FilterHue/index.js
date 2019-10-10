import React, { useState } from 'react';
import { Wrapper, IframeWrapper, StyledIframe, SliderWrapper } from './style';
import { StyledSlider } from '../../components/style';

const FilterHue = () => {
  const [curHue, setCurHue] = useState(0);

  return (
    <Wrapper>
      <IframeWrapper>
        <StyledIframe
          src="https://ant.design/components/button-cn/"
          style={{ filter: `hue-rotate(${curHue}deg)` }}
        />
      </IframeWrapper>
      <SliderWrapper>
        <StyledSlider max={360} value={curHue} onChange={setCurHue} />
      </SliderWrapper>
    </Wrapper>
  );
};

export default FilterHue;
