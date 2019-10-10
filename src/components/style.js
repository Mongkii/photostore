import styled from 'styled-components';
import { Button, Slider } from 'antd';
import color from '../utils/color';

export const StyledSlider = styled(Slider)`
  .ant-slider-rail {
    background-color: ${color.darkWhite};
  }
  .ant-slider-track {
    background-color: ${color.blue};
  }
  &:hover {
    .ant-slider-rail {
      background-color: ${color.betweenBnW};
    }
    .ant-slider-track {
      background-color: #4f9ad0;
    }
  }
`;

export const StyledButton = styled(Button)`
  border-radius: 16px;
  font-weight: 700;
  &.ant-btn-primary {
    background-color: ${color.blue};
    border-color: ${color.blue};
  }
`;
