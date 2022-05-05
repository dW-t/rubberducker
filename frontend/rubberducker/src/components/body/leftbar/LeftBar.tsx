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

const Menu = styled.div`
  height: 40px;
  margin-top: 10px;
  text-align: center;
  transition: all 0.3s;
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const Img = styled.span<{ icon: string }>`
  height: 24px;
  width: 24px;
  margin-right: 6px;
  background-image: url(${(props) => props.icon});
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
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
    <Img icon={Icon} />
    <span>
      <Menu>{title}</Menu>
    </span>
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
