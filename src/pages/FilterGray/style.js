import styled from 'styled-components';
import img_bg from './assets/img_bg.jpg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
`;

export const Background = styled.div`
  flex: none;
  position: relative;
  width: 486px;
  height: 590px;
  background: url(${img_bg}) center/cover no-repeat;
`;

export const BadgeWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 80px;
  display: flex;
  height: 54px;
`;

export const Badge = styled.img`
  flex: none;
  height: 100%;
  ${({ active }) => (active ? '' : 'filter: grayscale(100%);')}
`;

export const SliderWrapper = styled.div`
  flex: none;
  width: 486px;
`;
