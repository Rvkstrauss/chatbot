import * as React from "react";
import ChatArea from "../ChatArea";
import ChatInput from "../ChatInput";
import StyledChatContainer from "./StyledChatContainer";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { connectSocket } from "src/store/socket/actions";
import Loader from '../Loader';

const ChatPage = () => {
  const dispatch = useDispatch();
  const connectChat = () => dispatch(connectSocket());
  const isConnected = useSelector((state: RootStateOrAny) => {
    return state.socketState.connected
  });
 
  if (!isConnected) {
   
    connectChat();
  }
  const loading = useSelector((state: RootStateOrAny) => {
    return state.messageState.loading
  });
  return (
    <ThemeProvider theme={theme}>
      <StyledChatContainer>
        <ChatArea />
        <ChatInput show={!loading}/>
        <Loader show={loading}/> 
      </StyledChatContainer>
    </ThemeProvider>
  );
};

export default ChatPage;
