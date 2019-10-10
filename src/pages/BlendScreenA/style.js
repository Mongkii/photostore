import styled from 'styled-components';
import { Button } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ItemWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  isolation: isolate;
`;

const commonSnowCSS = `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform 0.5s;
`;

export const ImageSnow = styled.img`
  ${commonSnowCSS}
  height: 30px;
  mix-blend-mode: screen;
  ${({ separate }) => (separate ? 'transform: translateX(-50px);' : '')}
`;

export const ButtonSnow = styled(Button)`
  ${commonSnowCSS}
  height: 30px;
  ${({ separate }) => (separate ? 'transform: translateX(50px);' : '')}
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: -30px;
  left: 0;
  width: 100%;
  text-align: center;
`;
