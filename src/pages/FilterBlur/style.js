import styled from 'styled-components';
import { Modal } from 'antd';
import color from '../../utils/color';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const AlbumWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  background-color: #ffffff;
`;

export const BackgroundWrapper = styled.div`
  height: calc(100% - 200px);
  background-color: #dddddd;
  overflow: hidden;
  img {
    transform: scale(1.1);
  }
`;

export const CoverWrapper = styled.div`
  position: absolute;
  left: 80px;
  bottom: 200px;
  width: 200px;
  height: 200px;
  transform: translateY(40%);
  border: 4px solid #ffffff;
  background-color: #dddddd;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 300px;
  bottom: 130px;
`;

export const Title = styled.span`
  margin-right: 20px;
  font-size: 40px;
  font-weight: 700;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    color: ${color.lightFont};
    background-color: ${color.lightBlack};
  }
  .ant-modal-header {
    height: 50px;
    padding: 16px 20px;
    background-color: ${color.mediumBlack};
    border: none;
    .ant-modal-title {
      color: ${color.lightFont};
      line-height: 1;
    }
  }
  .ant-modal-body {
    padding: 20px 20px 40px;
  }
  .ant-modal-footer {
    padding: 0 20px 20px;
    border: none;
    .ant-btn:not(.ant-btn-primary) {
      display: none;
    }
    .ant-btn-primary {
      border-radius: 16px;
      font-weight: 700;
      background-color: ${color.blue};
      border-color: ${color.blue};
    }
  }
`;
