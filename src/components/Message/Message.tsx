import React from "react";
import StyledMessage from "./StyledMessage";
import { IMessage } from "../../types";
import Avatar from "../Avatar/Avatar";
import styled from 'styled-components';
import config from 'src/config';

const Message = (props: { message: IMessage; showAvatar: boolean }) => {
  const { message, showAvatar } = props;

  return (
    <StyledMessageContainer sender={message.from}>
      {showAvatar && <Avatar sender={message.from} />}
      <StyledMessage type={message.from} showAvatar={showAvatar}>
        {message.content}
      </StyledMessage>
    </StyledMessageContainer>
  );
};

export default Message;

const StyledMessageContainer = styled('div')<{sender: string}>`
  display: flex;
  align-items: flex-end;
  justify-content: 'flex-start';
  flex-direction: ${(props) => props.sender !== config.MAYA ? 'row-reverse' : 'row'};
  margin: ${(props) => props.sender !== config.MAYA ? '9px 0' : '0'};
`;
