import React from 'react';
import styled from 'styled-components';
import HeadBar from './HeadBar';
import UserPanel from './UserPanel';

const Wrapper = styled.div`
  flex-grow: 3;
  flex-basis: 350px;
  background-color: pink;
`;

const Body = () => (
  <Wrapper>
    <HeadBar />
    <UserPanel />
  </Wrapper>
);

export default Body;
