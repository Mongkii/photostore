import React, { useState } from 'react';
import {
  Wrapper,
  Content,
  StripeWrapper,
  StripeA,
  StripeB,
  StripeC,
  ButtonWrapper,
} from './style';
import { StyledButton } from '../../components/style';

const stripeNames = ['A', 'B', 'C'];
const stripeNamePrefix = {
  A: '\\',
  B: '/',
  C: '-',
};

const BlendMultiply = () => {
  const [showStripe, setShowStripe] = useState({});
  const getHandleButtonClick = (stripeName) => () => {
    const visible = showStripe[stripeName];
    let newShowStripe = {};
    if (visible) {
      newShowStripe = { ...showStripe, [stripeName]: false };
    } else {
      newShowStripe = { ...showStripe, [stripeName]: true };
    }
    setShowStripe(newShowStripe);
  };
  return (
    <Wrapper>
      <Content>
        <StripeWrapper>
          {showStripe.A && <StripeA />}
          {showStripe.B && <StripeB />}
          {showStripe.C && <StripeC />}
        </StripeWrapper>
        <ButtonWrapper>
          {stripeNames.map((stripeName) => {
            const shouldGhost = !showStripe[stripeName];
            return (
              <StyledButton
                ghost={shouldGhost}
                type={shouldGhost ? 'normal' : 'primary'}
                onClick={getHandleButtonClick(stripeName)}
              >
                {stripeNamePrefix[stripeName]} 条纹{stripeName}
              </StyledButton>
            );
          })}
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default BlendMultiply;
