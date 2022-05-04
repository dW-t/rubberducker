import React from 'react';
import styled from 'styled-components';
import UserData from './UserData';
import contents from '../../json/sample.json';
import Card from './card/Card';

const Wrapper = styled.div`
  background-color: #435058;
  border-radius: 2%;
  flex-grow: 1;
  flex-basis: 350px;
  margin-right: 20px;
  margin-left: 20px;
  position: relative;
`;

const Bgimg = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 275px;
  border-radius: 2%;
`;

const Iconimg = styled.div<{ image: string }>`
  position: absolute;
  left: 25px;
  top: 200px;
  width: 120px;
  height: 120px;
  background-color: white;
  background-image: url(${(props) => props.image});
  border-radius: 50%;
`;

const Button = styled.button`
  position: absolute;
  right: 1%;
  margin: 20px 0;
  width: 90px;
  height: 35px;
  background-color: white;
  border-radius: 100vh;
  border-style: none;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s;
  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const MenuBox = styled.div`
  display: flex;
  border-bottom: 1px solid;
  border-color: white;
`;

const Menu = styled.div`
  flex: auto;
  height: 40px;
  width: 80px;
  display: inline;
  text-align: center;
  padding-top: 15px;
  transition: background 0.3s;
  :hover {
    cursor: pointer;
    background-color: #3e474d;
  }
`;

const Main = () => (
  <Wrapper>
    <Bgimg image={contents.BackGroundImage} />
    <Iconimg image={contents.UserIcon} />
    <Button>follow</Button>
    <UserData userName={contents.UserName} />
    <MenuBox>
      <Menu>Activity</Menu>
      <Menu>Like</Menu>
      <Menu>Reply</Menu>
    </MenuBox>
    {contents.Contents.map((content) => (
      <Card
        MainContent={content.MainContent}
        UserName={contents.UserName}
        UserIcon={contents.UserIcon}
      />
    ))}
  </Wrapper>
);

export default Main;
