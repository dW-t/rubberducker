import React from 'react';
import styled from 'styled-components';
import Main from './components/body/Main';
import RightBar from './components/body/rightbar/RightBar';
import LeftBar from './components/leftbar/LeftBar';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  margin-top: 10px;
`;

const App = () => (
  <Wrapper>
    <LeftBar />
    <Main />
    <RightBar />
  </Wrapper>
);

export default App;
