import React from 'react';
import {
  Wrapper,
  Header,
  Title,
  TitleIcon,
  StyledTabs,
  StyledTabPane,
} from './style';
import pageMapper from './pageMapper';

const MainPage = () => {
  return (
    <Wrapper>
      <Header>
        <TitleIcon />
        <Title>Photostore</Title>
      </Header>
      <StyledTabs animated tabBarGutter={0}>
        {pageMapper.map((page) => {
          const { title, key, comp: Comp } = page;
          return (
            <StyledTabPane tab={title} key={key}>
              <Comp />
            </StyledTabPane>
          );
        })}
      </StyledTabs>
    </Wrapper>
  );
};

export default MainPage;
