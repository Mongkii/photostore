import React, { useState } from 'react';
import {
  Wrapper,
  Background,
  BadgeWrapper,
  Badge,
  SliderWrapper,
} from './style';
import { StyledSlider } from '../../components/style';
import * as imgBadges from './assets/imgBadges';

const badgeIndexs = [1, 2, 3, 4, 5];

const sliderMarks = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
};

const FilterGray = () => {
  const [curActive, setCurActive] = useState(0);

  return (
    <Wrapper>
      <Background>
        <BadgeWrapper>
          {badgeIndexs.map((index) => {
            const src = imgBadges[`badge_${index}`];
            const active = curActive >= index;
            return <Badge key={index} src={src} active={active} />;
          })}
        </BadgeWrapper>
      </Background>
      <SliderWrapper>
        <StyledSlider
          max={5}
          marks={sliderMarks}
          dots
          tooltipVisible={false}
          value={curActive}
          onChange={setCurActive}
        />
      </SliderWrapper>
    </Wrapper>
  );
};

export default FilterGray;
