import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../../img/search.svg';

const Wrapper = styled.div`
  width: 28%;
`;

const Search = styled.div`
  background-color: #435058;
  border-radius: 25px;
  width: 90%;
  height: 40px;
  margin: 0;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-left: 10px;
  margin-right: 8px;
  padding-left: 16px;
  height: 16px;
  background-image: url(${SearchIcon});
`;

const Input = styled.input`
  background-color: #435058;
  color: #f1f2ee;
  width: 100%;
  border: none;
  outline: none;
  margin-right: 10px;
`;

const RightBar = () => (
  <Wrapper>
    <Search>
      <Icon />
      <Input type="text" placeholder="Search" />
    </Search>
  </Wrapper>
);

export default RightBar;
