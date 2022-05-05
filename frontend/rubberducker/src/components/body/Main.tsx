import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';
import UserData from './UserData';
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

const Bgimg = styled.div<{ image: string | null }>((props) => ({
  backgroundImage: `url(data:jpg;base64,${props.image ?? ''})`,
  width: '100%',
  height: '275px',
  borderRadius: '2%',
}));

const Iconimg = styled.div<{ image: string | null }>((props) => ({
  backgroundImage: `url(data:png;base64,${props.image ?? ''})`,
  position: 'absolute',
  left: '25px',
  top: '200px',
  width: '120px',
  height: '120px',
  backgroundColor: 'white',
  borderRadius: '50%',
}));

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

type Data = {
  UserName: string;
  Profile: {
    MainProfile: string;
    SubProfile: string;
  };
  BackGroundImage: string;
  UserIcon: string;
  Contents: [
    {
      Id: number;
      MainContent: {
        Date: string;
        Body: string;
        LikeCount: number;
      };
      ReplyCount: string;
      Reply: [
        {
          UserName: string;
          UserIcon: string;
          Body: string;
        }
      ];
    }
  ];
};

const Main = () => {
  const [contents, setContent] = useState<Data>();

  // 読み込み時
  useEffect(() => {
    const fetchData = async () => {
      const res: AxiosResponse<Data> = await axios.get(
        `http://localhost:5000/contents`
      );
      setContent(res.data);
    };

    fetchData().catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <Bgimg image={contents !== undefined ? contents.BackGroundImage : null} />
      <Iconimg image={contents !== undefined ? contents.UserIcon : null} />
      <Button>follow</Button>
      <UserData
        UserName={contents?.UserName}
        MainProfile={contents?.Profile.MainProfile}
        SubProfile={contents?.Profile.SubProfile}
      />
      <MenuBox>
        <Menu>Activity</Menu>
        <Menu>Like</Menu>
        <Menu>Reply</Menu>
      </MenuBox>
      {contents?.Contents.map((content) => (
        <Card
          MainContent={content.MainContent}
          UserName={contents.UserName}
          UserIcon={contents.UserIcon}
          key={content.Id}
        />
      ))}
    </Wrapper>
  );
};

export default Main;
