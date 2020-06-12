import * as React from "react";
import Message from "../Message";
import { IMessage } from "../../types";
import StyledChatArea from "./StyledChatArea";
import { RootStateOrAny, useSelector } from 'react-redux';

const ChatArea = () => {
 
  const messages = useSelector((state: RootStateOrAny) => {
    return state.messageState.messages
  });
  
  return (
    <StyledChatArea>
      {messages &&
        messages.map((element: IMessage, idx: number) => {
          const showAvatar = idx === messages.length - 1 || messages[idx + 1].from !== element.from;
          return element.content ? (
            <React.Fragment key={idx}>
              <Message message={element} showAvatar={showAvatar}/>
            </React.Fragment>
          ) : null;
        })}
    </StyledChatArea>
  );
};

export default ChatArea;
