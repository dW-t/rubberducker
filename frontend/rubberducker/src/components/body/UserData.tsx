import React from 'react';
import styled from 'styled-components';

type Props = {
  UserName: string | undefined;
  MainProfile: string | undefined;
  SubProfile: string | undefined;
};

const Name = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin-top: 50px;
  margin-left: 20px;
`;

const UserData: React.FC<Props> = ({
  UserName,
  MainProfile,
  SubProfile,
}: Props) => (
  <>
    <Name>{UserName}</Name>
    <div>
      <span>
        <p>{MainProfile}</p>
        <p>{SubProfile}</p>
      </span>
    </div>
  </>
);

export default UserData;
