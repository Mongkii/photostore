import React, { useState, useEffect, useMemo, useRef } from 'react';
import ButtonUpload from '../../components/ButtonUpload';
import { StyledButton } from '../../components/style';
import { Wrapper, ImageArea, Image, ToolArea, ButtonWrapper } from './style';
import Slider from './Slider';
import { getFilterUnit, defaultFilters, filterSliderList } from './utils';
import defaultImage from '../../assets/icon.png';

const Editor = () => {
  const [filters, setFilters] = useState(defaultFilters);
  const [imgSrc, setImgSrc] = useState(defaultImage);
  const [fitWidth, setFitWidth] = useState(false);
  const getHandleSetFilter = (filterName) => (value) => {
    const newFilters = { ...filters };
    newFilters[filterName] = value;
    setFilters(newFilters);
  };

  const styleFilters = useMemo(() => {
    const styleContent = Object.entries(filters)
      .map(([name, value]) => {
        const unit = getFilterUnit(name);
        return `${name}(${value}${unit})`;
      })
      .join(' ');
    return {
      filter: styleContent,
    };
  }, [filters]);

  // 图像宽高自适应
  const refImageArea = useRef();
  const refImage = useRef();
  useEffect(() => {
    const domImageArea = refImageArea.current;
    const domImage = refImage.current;
    if (domImage.clientWidth > domImageArea.clientWidth - 100) {
      setFitWidth(true);
    } else {
      setFitWidth(false);
    }
  }, [imgSrc]);

  return (
    <Wrapper>
      <ImageArea ref={refImageArea}>
        <Image
          ref={refImage}
          src={imgSrc}
          style={styleFilters}
          fitWidth={fitWidth}
        />
      </ImageArea>
      <ToolArea>
        <ButtonWrapper>
          <ButtonUpload type="primary" setImgSrc={setImgSrc} />
        </ButtonWrapper>
        {filterSliderList.map(({ name, filterName, max }) => (
          <Slider
            name={name}
            max={max || 100}
            value={filters[filterName]}
            setValue={getHandleSetFilter(filterName)}
          />
        ))}
        <ButtonWrapper>
          <StyledButton
            type="primary"
            onClick={() => {
              setFilters(defaultFilters);
            }}
          >
            重置
          </StyledButton>
        </ButtonWrapper>
      </ToolArea>
    </Wrapper>
  );
};

export default Editor;
