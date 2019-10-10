import styled from 'styled-components';
import { Tabs } from 'antd';
import icon from '../../assets/icon.png';
import color from '../../utils/color';

const { TabPane } = Tabs;

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background-color: ${color.lightBlack};
`;

export const TitleIcon = styled.div`
  flex: none;
  width: 35px;
  height: 35px;
  margin-right: 10px;
  background: url(${icon}) center/contain no-repeat;
  filter: grayscale(0.5);
`;

export const Title = styled.div`
  flex: 1;
  color: ${color.lightFont};
  font-size: 24px;
  font-weight: 500;
`;

export const StyledTabs = styled(Tabs)`
  height: calc(100vh - 50px);
  background-color: ${color.deepBlack};
  .ant-tabs-bar {
    margin: 0;
    padding: 0 20px;
    background-color: ${color.mediumBlack};
    border-bottom-color: ${color.lineBlack};
  }
  .ant-tabs-tab-prev,
  .ant-tabs-tab-next {
    color: ${color.darkFont};
  }
  .ant-tabs-tab {
    padding: 10px 15px;
    color: ${color.darkFont};
    &.ant-tabs-tab-active {
      color: ${color.active};
    }
  }
  .ant-tabs-ink-bar {
    background-color: ${color.active};
  }
  .ant-tabs-content {
    height: calc(100% - 40px);
  }
`;

export const StyledTabPane = styled(TabPane)`
  height: 100%;
  background-color: ${color.deepBlack};
`;
