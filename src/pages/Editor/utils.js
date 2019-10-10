export const filterNames = {
  BLUR: 'blur',
  BRIGHT: 'brightness',
  CONTRAST: 'contrast',
  // SHADOW: 'drop-shadow',
  GRAY: 'grayscale',
  HUE: 'hue-rotate',
  INVERT: 'invert',
  // OPACITY: 'opacity',
  SATURATE: 'saturate',
  SEPIA: 'sepia',
};

export const filterSliderList = [
  {
    name: '亮度',
    filterName: filterNames.BRIGHT,
    max: 300,
  },
  {
    name: '对比度',
    filterName: filterNames.CONTRAST,
    max: 300,
  },
  {
    name: '饱和度',
    filterName: filterNames.SATURATE,
    max: 300,
  },
  {
    name: '色调',
    filterName: filterNames.HUE,
    max: 360,
  },
  {
    name: '灰度',
    filterName: filterNames.GRAY,
  },
  {
    name: '褐度',
    filterName: filterNames.SEPIA,
  },
  {
    name: '反色',
    filterName: filterNames.INVERT,
  },
  {
    name: '模糊',
    filterName: filterNames.BLUR,
  },
];

export const getFilterUnit = (filterName) => {
  switch (filterName) {
    case filterNames.HUE:
      return 'deg';
    case filterNames.BLUR:
      return 'px';
    default:
      return '%';
  }
};

const getDefaultFilterValue = (filterName) => {
  switch (filterName) {
    case filterNames.BRIGHT:
    case filterNames.CONTRAST:
    case filterNames.SATURATE:
      return 100;
    default:
      return 0;
  }
};

const getDefaultFilters = () => {
  const defaultFilters = {};
  Object.values(filterNames).forEach((filterName) => {
    defaultFilters[filterName] = getDefaultFilterValue(filterName);
  });
  return defaultFilters;
};

export const defaultFilters = getDefaultFilters();

export const handleInputNumber = (rawPrevValue, rawNewValue) => {
  const prevValue = String(rawPrevValue);
  const newValue = String(rawNewValue);
  if (newValue === '' || newValue === '.' || newValue === '-') {
    return newValue;
  }
  const newValueNum = Number(newValue);
  if (Number.isNaN(newValueNum)) {
    return prevValue;
  }
  const dotIndex = newValue.indexOf('.');
  let finalNewValue;
  if (dotIndex !== -1) {
    finalNewValue = newValue.slice(0, dotIndex + 3);
  } else {
    finalNewValue = String(newValueNum); // 避免返回 -0 这种值
  }
  return finalNewValue;
};
