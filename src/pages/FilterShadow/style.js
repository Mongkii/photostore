import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  background-color: #8e99a2;
`;

export const Image = styled.img`
  width: 80%;
`;

export const Tooltip = styled.div`
  position: relative;
  width: 300px;
  height: 150px;
  background-color: #ffffff;
  border-radius: 8px;
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 100px;
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    transform: rotate(45deg);
  }
`;