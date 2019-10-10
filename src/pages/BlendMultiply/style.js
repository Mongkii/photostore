import styled from 'styled-components';

const getStripeStr = (pieces, startColor, endColor, initPercent = 0) => {
  const step = 100 / pieces;
  const halfStep = step / 2;
  let cur = initPercent;
  const resultArr = [];
  while (cur < 100) {
    const curStart = cur;
    const partResult = [0, 1]
      .map((num) => {
        const percentStart = (curStart + halfStep * num).toFixed(2);
        const percentEnd = (curStart + halfStep * (num + 1)).toFixed(2);
        const title = num % 2 === 0 ? startColor : endColor;
        return `${title} ${percentStart}%, ${title} ${percentEnd}%`;
      })
      .join(',');
    resultArr.push(partResult);
    cur += step;
  }
  return resultArr.join(',');
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
`;

export const Content = styled.div`
  flex: none;
  width: 400px;
`;

export const StripeWrapper = styled.div`
  position: relative;
  height: 400px;
  background-color: #ffffff;
  overflow: hidden;
  isolation: isolate;
`;

const BasicStripe = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  width: 500px;
  height: 500px;
  mix-blend-mode: multiply;
  transition: all 0.2s;
`;

export const StripeA = styled(BasicStripe)`
  background-image: linear-gradient(
    45deg,
    ${getStripeStr(15, 'transparent', 'dodgerblue')}
  );
`;

export const StripeB = styled(BasicStripe)`
  background-image: linear-gradient(
    -45deg,
    ${getStripeStr(15, 'transparent', 'tomato')}
  );
`;

export const StripeC = styled(BasicStripe)`
  background-image: linear-gradient(
    to top,
    ${getStripeStr(12, 'transparent', 'gold')}
  );
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
