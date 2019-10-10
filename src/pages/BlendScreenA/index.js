import React, { useState } from 'react';
import {
  Wrapper,
  ItemWrapper,
  ImageSnow,
  ButtonSnow,
  ButtonWrapper,
} from './style';
import { StyledButton } from '../../components/style';
import snow from './assets/snow.png';

const BlendScreenA = () => {
  const [separate, setSeparate] = useState(true);
  return (
    <Wrapper>
      <ItemWrapper>
        <ButtonSnow type="primary" separate={separate}>
          一个按钮
        </ButtonSnow>
        <ImageSnow src={snow} separate={separate} />
        <ButtonWrapper>
          <StyledButton
            ghost
            onClick={() => {
              setSeparate(!separate);
            }}
          >
            {separate ? '合并' : '分离'}
          </StyledButton>
        </ButtonWrapper>
      </ItemWrapper>
    </Wrapper>
  );
};

export default BlendScreenA;
