import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  overflow: auto;
`;

export const ShowcaseArea = styled.div`
  flex: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ShowcaseWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background-color: #ffffff;
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const ImageBlurred = styled(Image)`
  filter: blur(10px);
  mask-image: linear-gradient(black, black), linear-gradient(black, black);
  mask-size: cover, 150px 150px;
  mask-composite: exclude;
  mask-composite: source-out;
  mask-repeat: no-repeat;
`;

export const MaskImage = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: #000000;
`;

export const ButtonArea = styled.div`
  flex: none;
  align-self: center;
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 20px;
`;
