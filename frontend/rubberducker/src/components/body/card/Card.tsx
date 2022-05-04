import React from 'react';

type Props = {
  UserName: string;
  UserIcon: string;
  MainContent: {
    Date: string;
    Body: string;
    LikeCount: number;
  };
};

const Card: React.FC<Props> = ({ MainContent, UserName, UserIcon }) => (
  <div>
    <p>{UserName}</p>
    <p>{MainContent.Date}</p>
    <p>{MainContent.Body}</p>
  </div>
);

export default Card;
