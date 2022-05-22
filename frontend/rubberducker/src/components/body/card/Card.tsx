import React from 'react';
import styled from 'styled-components';
import ReplyIcon from '../../../img/reply.svg';
import LikeIcon from '../../../img/like.svg';

type Props = {
  UserName: string;
  UserIcon: string;
  MainContent: {
    Date: string;
    Body: string;
    LikeCount: number;
  };
};

const Wrapper = styled.div`
  display: flex;
  margin: 10px 0 0 0;
  gap: 4px;
  padding-bottom: 20px;
  border-bottom: 1px solid;
`;

const IconImage = styled.img`
  width: 56px;
  height: 56px;
  background-color: white;
  border-radius: 50%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeadContent = styled.div`
  display: flex;
  width: 100%;
`;

const Main = styled.p`
  font-size: 14px;
  margin: 0;
  margin-top: 4px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  margin-top: 10px;
  margin-right: 10px;
`;

const Date = styled.p`
  font-size: 14px;
  margin: 0;
  margin-top: 10px;
  margin-right: 10px;
`;

const SubItems = styled.div`
  display: flex;
  margin-right: 6px;
  margin-top: 10px;
`;

const Item = styled.div<{ icon: string }>`
  height: 16px;
  width: 16px;
  background-image: url(${(props) => props.icon});
  margin-right: 5%;
`;

const Card: React.FC<Props> = ({ MainContent, UserName, UserIcon }) => (
  <Wrapper>
    <IconImage src={UserIcon} />
    <Content>
      <HeadContent>
        <Name>{UserName}</Name>
        <Date>{MainContent.Date}</Date>
      </HeadContent>
      <Main>{MainContent.Body}</Main>
      <SubItems>
        <Item icon={ReplyIcon} />
        <Item icon={LikeIcon} />
      </SubItems>
    </Content>
  </Wrapper>
);

export default Card;
