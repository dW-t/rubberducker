import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 25%;
  padding: 1em;
  color: #000;
  background-color: #fff;
`;

const Button = styled.button`
  width: 90px;
  height: 35px;
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

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  outline: none;
`;

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TweetModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    return (
      <Overlay>
        <Content>
          <TextArea
            placeholder="いま考えていることを書いてみよう！"
            required
            autoFocus
          />
          <Button onClick={closeModal}>cancel</Button>
          <Button onClick={closeModal}>send</Button>
        </Content>
      </Overlay>
    );
  }
  return null;
};

export default TweetModal;
