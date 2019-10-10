import React, { useState } from 'react';
import {
  Wrapper,
  AlbumWrapper,
  BackgroundWrapper,
  CoverWrapper,
  Image,
  TitleWrapper,
  Title,
  StyledModal,
} from './style';
import ButtonUpload from '../../components/ButtonUpload';

const FilterBlur = () => {
  const [imgSrc, setImgSrc] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);

  const handleOpenModal = () => {
    setVisibleModal(true);
    document.querySelector('.App').setAttribute('style', 'filter: blur(3px);');
  };

  const handleCloseModal = () => {
    setVisibleModal(false);
    document.querySelector('.App').removeAttribute('style');
  };

  return (
    <Wrapper>
      <AlbumWrapper>
        <BackgroundWrapper>
          <Image src={imgSrc} style={{ filter: 'blur(20px)' }} />
        </BackgroundWrapper>
        <CoverWrapper>
          <Image src={imgSrc} />
        </CoverWrapper>
        <TitleWrapper>
          <Title onClick={handleOpenModal}>Yet Another Album UI</Title>
          <ButtonUpload setImgSrc={setImgSrc} />
        </TitleWrapper>
      </AlbumWrapper>
      <StyledModal
        visible={visibleModal}
        title="Modal"
        onOk={handleCloseModal}
        okText="确定"
        closable={false}
      >
        这是一个 Modal
      </StyledModal>
    </Wrapper>
  );
};

export default FilterBlur;
