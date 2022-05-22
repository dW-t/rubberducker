import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserData from './UserData';
import Card from './card/Card';
import PlusIcon from '../../img/plus2.svg';
import TweetModal from './tweetmodal/TweetModal';
import { useDispatch, useSelector } from '../../store';
import { getTweets } from '../../slices/tweet';

const Wrapper = styled.div`
  background-color: #435058;
  border-radius: 4px;
  flex-grow: 1;
  flex-basis: 350px;
  margin-right: 20px;
  margin-left: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Bgimg = styled.div<{ image: string | undefined }>((props) => ({
  backgroundImage: `url(${props.image ?? ''})`,
  width: '100%',
  height: '275px',
  borderRadius: '2%',
}));

const Iconimg = styled.div<{ image: string | undefined }>((props) => ({
  backgroundImage: `url(${props.image ?? ''})`,
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
  top: 285px;
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
    opacity: 0.5;
    cursor: pointer;
  }
`;

const AdditionalButton = styled.button<{ icon: string }>`
  position: fixed;
  top: 90%;
  right: 30%;
  margin: 20px 0;
  width: 56px;
  height: 56px;
  background-image: url(${(props) => props.icon});
  background-color: white;
  border-radius: 50%;
  border-style: none;
  transition: all 0.3s;
  opacity: 0.8;
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.6));
  :hover {
    opacity: 0.4;
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

const Main: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const tweet = useSelector((state) => state.tweetContents.content);
  const dispatch = useDispatch();

  // 読み込み時
  useEffect(() => {
    dispatch(getTweets()).catch((err) => console.error(err));
  }, [dispatch]);

  const onClickAddtionalButton = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <Wrapper>
        <Bgimg image={tweet?.BackGroundImage} />
        <Iconimg image={tweet?.UserIcon} />
        <div style={{ padding: 16 }}>
          <Button>follow</Button>
          <AdditionalButton icon={PlusIcon} onClick={onClickAddtionalButton} />
          <UserData
            UserName={tweet?.UserName}
            MainProfile={tweet?.Profile.MainProfile}
            SubProfile={tweet?.Profile.SubProfile}
          />
          <MenuBox>
            <Menu>Activity</Menu>
            <Menu>Like</Menu>
            <Menu>Reply</Menu>
          </MenuBox>
          {tweet?.Contents.map((content) => (
            <Card
              MainContent={content.MainContent}
              UserName={tweet.UserName}
              UserIcon={tweet.UserIcon}
              key={content.Id}
            />
          ))}
        </div>
        <TweetModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
      </Wrapper>
      <AdditionalButton icon={PlusIcon} onClick={onClickAddtionalButton} />
    </>
  );
};

export default Main;
