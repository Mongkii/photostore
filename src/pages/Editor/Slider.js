import React from 'react';
import PropTypes from 'prop-types';
import {
  SliderWrapper,
  SlideStatusWrapper,
  SliderName,
  StyledInput,
} from './style';
import { StyledSlider } from '../../components/style';
import { handleInputNumber } from './utils';

const Slider = (props) => {
  const { name, max, value, setValue } = props;

  const handleSetValue = (inputValue) => {
    const newValue = handleInputNumber(value, inputValue);
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    const { value: inputValue } = event.target || {};
    handleSetValue(inputValue);
  };

  return (
    <SliderWrapper>
      <SlideStatusWrapper>
        <SliderName>{name}</SliderName>
        <StyledInput value={value} onChange={handleInputChange} />
      </SlideStatusWrapper>
      <StyledSlider
        tooltipVisible={false}
        max={max}
        value={value}
        onChange={handleSetValue}
      />
    </SliderWrapper>
  );
};

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Slider;
