import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SettingsIcon from '../../../img/settings.svg';
import HomeIcon from '../../../img/home.svg';

const Wrapper = styled.div`
  width: 28%;
  font-size: 20px;
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

// imageは基本的にimgタグを使いましょう
const IconImage = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 6px;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 40px;
  transition: all 0.3s;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const MenuWithIcon: React.FC<{ title: string; Icon: string }> = ({
  title,
  Icon,
}) => (
  <MenuWrapper>
    <IconImage src={Icon} />
    <span>{title}</span>
  </MenuWrapper>
);

const ThreadLink = styled(Link)`
  text-decoration: none;
  :visited {
    color: #f1f2ee;
    text-decoration: none;
  }
`;

const LeftBar = () => (
  <Wrapper>
    <MenuBox>
      <ThreadLink to="/">
        <MenuWithIcon title="Home" Icon={HomeIcon} />
      </ThreadLink>
      <ThreadLink to="/settings">
        <MenuWithIcon title="Settings" Icon={SettingsIcon} />
      </ThreadLink>
    </MenuBox>
  </Wrapper>
);

export default LeftBar;
