import styled from 'styled-components';
import { Input } from 'antd';
import color from '../../utils/color';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

export const ImageArea = styled.div`
  flex: 1;
  position: relative;
  height: 100%;
  overflow: auto;
  isolation: isolate;
`;

export const Image = styled.img`
  position: absolute;
  ${({ fitWidth }) =>
    fitWidth
      ? `
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% - 100px);
  `
      : `
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
  height: calc(100% - 150px);`};
`;

export const ToolArea = styled.div`
  flex: none;
  width: 300px;
  height: 100%;
  padding: 20px;
  background-color: ${color.lightBlack};
  overflow: auto;
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const SliderWrapper = styled.div`
  margin-bottom: 20px;
`;

export const SlideStatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SliderName = styled.span`
  color: ${color.lightFont};
`;

export const StyledInput = styled(Input)`
  width: 50px;
  height: 24px;
  color: ${color.lightFont};
  text-align: center;
  background-color: ${color.mediumBlack};
  border-color: ${color.darkWhite};
`;
