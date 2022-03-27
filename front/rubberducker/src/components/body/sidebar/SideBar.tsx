import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex-basis: 280px;
  background-color: blue;
`;
const SideBar = () => (
  <Wrapper>
    <p>SideBar</p>
  </Wrapper>
);

export default SideBar;
