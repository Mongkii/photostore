import styled from 'styled-components';
import { StyledButton as CommonStyledButton } from '../../components/style';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
`;

export const ItemWrapper = styled.div`
  flex: none;
  position: relative;
  width: 360px;
  height: 640px;
  isolation: isolate;
`;

const cssAbsoluteCenter = `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const VideoChoice = styled.video`
  ${cssAbsoluteCenter}
  mix-blend-mode: screen;
`;

export const Background = styled.div`
  ${cssAbsoluteCenter}
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #023d5f;
`;

export const Text = styled.div`
  margin: 80px 0 60px;
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
`;

export const StyledButton = styled(CommonStyledButton)`
  width: 60%;
  height: 40px;
  margin-top: 40px;
  font-size: 20px;
  border-radius: 20px;
`;
