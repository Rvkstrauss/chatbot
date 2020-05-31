import * as React from "react";
import ChatArea from "../ChatArea";
import ChatInput from "../ChatInput";
import { withUser } from "src/utils/withUser";
import StyledChatContainer from "./StyledChatContainer";

const ChatPage = () => (
    <StyledChatContainer>
      <ChatArea />
      <ChatInput />
    </StyledChatContainer>
);

export default withUser(ChatPage);
