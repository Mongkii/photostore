import React from 'react';
import { Wrapper, ItemWrapper, Tooltip, Image } from './style';
import rrpLogo from './assets/rrpLogo.png';

const FilterShadow = () => {
  return (
    <Wrapper>
      <ItemWrapper>
        <Tooltip style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }} />
      </ItemWrapper>
      <ItemWrapper>
        <Image
          src={rrpLogo}
          style={{ filter: 'drop-shadow(10px 10px 0 #4067cf)' }}
        />
      </ItemWrapper>
    </Wrapper>
  );
};

export default FilterShadow;
