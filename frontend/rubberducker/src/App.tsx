import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Main from './components/body/Main';
import RightBar from './components/body/rightbar/RightBar';
import LeftBar from './components/body/leftbar/LeftBar';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  margin-top: 10px;
`;
const Settings = () => <h1>Settings!!</h1>;

const App = () => (
  <Wrapper>
    <LeftBar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
    <RightBar />
  </Wrapper>
);

export default App;
