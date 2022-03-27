import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex-basis: 120px;
  background-color: green;
`;

const Header = () => (
  <Wrapper>
    <p>icon1</p>
    <p>icon2</p>
    <p>icon3</p>
  </Wrapper>
);

export default Header;
