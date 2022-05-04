import React from 'react';
import styled from 'styled-components';

type Props = {
  userName: string;
};

const UserName = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin-top: 50px;
  margin-left: 20px;
`;

const UserData: React.FC<Props> = ({ userName }: Props) => (
  <>
    <UserName>{userName}</UserName>
    <div>
      <span>
        <p>ユーザープロフィール</p>
        <p>付加情報</p>
      </span>
    </div>
  </>
);

export default UserData;
