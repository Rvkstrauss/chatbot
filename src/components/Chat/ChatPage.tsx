import * as React from "react";
import ChatArea from "../ChatArea";
import ChatInput from "../ChatInput";
// import { withUser } from "src/utils/withUser";
import StyledChatContainer from "./StyledChatContainer";
import { connectSocket } from "../../store/socket/actions";
import { useDispatch } from "react-redux";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

const ChatPage = () => {
  const dispatch = useDispatch();
  const connectChat = () => dispatch(connectSocket());
  connectChat();
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
