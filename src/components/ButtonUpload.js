import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon } from 'antd';
import { StyledButton } from './style';

const emptyArray = [];

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const ButtonUpload = (props) => {
  const { type, setImgSrc, ...restProps } = props;

  const handleUpload = (file) => {
    getBase64(file, setImgSrc);
    return false;
  };

  return (
    <Upload
      {...restProps}
      fileList={emptyArray}
      accept="image/*"
      beforeUpload={handleUpload}
    >
      <StyledButton type={type}>
        <Icon type="folder-open" />
        打开图片
      </StyledButton>
    </Upload>
  );
};

ButtonUpload.propTypes = {
  type: PropTypes.string,
  setImgSrc: PropTypes.func.isRequired,
};

export default ButtonUpload;
