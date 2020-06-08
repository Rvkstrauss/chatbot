import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage, changeUsername } from "../../store/message/actions";
import StyledChatInput from "./StyledChatInput";
import { readRecord, updateRecord } from "../../utils/storage-service";
import sendButton from "../../images/submit_icon.png";
import { IMessage } from "../../types";
import config from "src/config";

const ChatInput = (props: { show: boolean }) => {
  const [chatMessage, setChatMessage] = useState("");
  const [username, setUsername] = useState(
    readRecord(config.USERNAME) || config.GUEST
  );
  const messagesInputRef = React.createRef<HTMLInputElement>();
  const dispatch = useDispatch();
  const sendChat = (message: IMessage) => {
    dispatch(sendMessage(message));
    return false;
  };

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setChatMessage(e.currentTarget.value);
    e.preventDefault();
  };

  const sendChatMessage = (): void => {
    if (chatMessage !== "") {
      // const type = getMessageType();
      const message = { from: username, content: chatMessage };
      if (!username || username === config.GUEST) {
        saveUsername();
      }
      sendChat(message);
      setChatMessage("");
    }
  };

  const saveUsername = () => {
    updateRecord(config.USERNAME, chatMessage);
    dispatch(changeUsername(chatMessage));
    setUsername(chatMessage);
  };

  // const getMessageType = () => {
  //   if (!username || username === config.GUEST) {
  //     saveUsername()
  //     return 'username';
  //   } else {
  //     return "calculate";
  //   }
  // };

  const handleClick = (e: any) => {
    e.preventDefault();
    sendChatMessage();
    return false;
  };

  return props.show ? (
    <StyledChatInput>
      <input
        autoFocus={true}
        className={"chat"}
        type="text"
        ref={messagesInputRef}
        value={chatMessage}
        onChange={handleOnChange}
      />
      <button className={"send"} onClick={handleClick}>
        <img src={sendButton} />
      </button>
    </StyledChatInput>
  ) : null;
};

export default ChatInput;
