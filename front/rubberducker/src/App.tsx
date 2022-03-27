import React from 'react';
import styled from 'styled-components';
import Body from './components/body/Body';
import SideBar from './components/body/sidebar/SideBar';
import Header from './components/header/Header';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const App = () => (
  <Wrapper>
    <Header />
    <Body />
    <SideBar />
  </Wrapper>
);

export default App;
