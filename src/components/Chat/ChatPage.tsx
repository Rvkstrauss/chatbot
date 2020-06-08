import * as React from "react";
import ChatArea from "../ChatArea";
import ChatInput from "../ChatInput";
import StyledChatContainer from "./StyledChatContainer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { connectSocket } from "src/store/socket/actions";

const ChatPage = () => {
  const dispatch = useDispatch();
  const connectChat = () => dispatch(connectSocket());
  const isConnected = useSelector((state: RootStateOrAny) => {
    return state.socketState.isConnected
  });
  if (!isConnected) {
    connectChat();
  }
  return (
    <ThemeProvider theme={theme}>
      <StyledChatContainer>
        <ChatArea />
        <ChatInput />
      </StyledChatContainer>
    </ThemeProvider>
  );
};

export default ChatPage;
