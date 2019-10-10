import React, { useState } from 'react';
import {
  Wrapper,
  ItemWrapper,
  CaseHourglass,
  CaseStar,
  ToolWrapper,
} from './style';
import { StyledButton, StyledSlider } from '../../components/style';

const BlendLighten = () => {
  const [separate, setSeparate] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [progress, setProgress] = useState(0);
  return (
    <Wrapper>
      <ItemWrapper>
        <CaseHourglass
          separate={separate}
          animated={animated}
          onMouseEnter={() => setAnimated(true)}
          onMouseLeave={() => {
            setAnimated(false);
          }}
        />
        <ToolWrapper>
          <StyledButton
            type="primary"
            onClick={() => {
              setSeparate(!separate);
            }}
          >
            {separate ? '合并' : '分离'}
          </StyledButton>
        </ToolWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <CaseStar progress={progress} />
        <ToolWrapper>
          <StyledSlider
            tooltipVisible={false}
            value={progress}
            onChange={setProgress}
          />
        </ToolWrapper>
      </ItemWrapper>
    </Wrapper>
  );
};

export default BlendLighten;
