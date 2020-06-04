import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage, changeUsername } from "../../store/message/actions";
import StyledChatInput from "./StyledChatInput";
import { readRecord, updateRecord } from "../../utils/storage-service";
import sendButton from "../../images/submit_icon.png";
import { IMessage } from "../../types";

// interface IChatDispatchProps {
//   send: (message: IMessage) => void;
// }

// const KEY_CODES = {
//   ENTER: "Enter",
//   CTRL: "Control",
// };

const ChatInput = () => {
  // public state = {
  //   username: readRecord("username") || "guest",
  //   chatMessage: "",
  //   greet: false,
  // };
  // private messagesInputRef = React.createRef<HTMLInputElement>();
  // private pressedKeysMap: {} = {};

  // public componentDidMount(): void {

  //   document.addEventListener("keydown", this.handleKeyPress);
  //   document.addEventListener("keyup", this.handleKeyUp);
  // }

  // public componentWillUnmount(): void {
  //   document.removeEventListener("keydown", this.handleKeyPress);
  //   document.removeEventListener("keyup", this.handleKeyUp);
  // }

  // public render() {
  const [chatMessage, setChatMessage] = useState("");
  const [username, setUsername] = useState(readRecord('username') || 'guest');
  // const [greet, setGreet] = useState(false);
  const messagesInputRef = React.createRef<HTMLInputElement>();
  const dispatch = useDispatch();
  const sendChat = (message: IMessage) => dispatch(sendMessage(message));


  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setChatMessage(e.currentTarget.value);
  };

  const sendChatMessage = (): void => {
    if (chatMessage !== "") {
      const type = getMessageType();
      const message = { from: username, content: chatMessage, type };
      sendChat(message);
      setChatMessage('');
    }
  };

  const saveUsername = () => {
    updateRecord('username', chatMessage);
    dispatch(changeUsername(chatMessage));
    setUsername(chatMessage);
    
  } 

  const getMessageType = () => {
    if (!username || username === "guest") {
      saveUsername()
      return "username";
    } else {
      return "calculate";
    }
  };

  const handleClick = () => {
    sendChatMessage();
  };

  return (
    <StyledChatInput>
      <input
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
  );
};

// private handleKeyUp = () => {
//   this.pressedKeysMap = {};
// };

// private handleKeyPress = (e: KeyboardEvent) => {
//   e = e || event;
//   this.pressedKeysMap[e.key] = e.type === "keydown";

//   if (readRecord("ctrlEnterSending") !== "On") {
//     this.sendOnPressEnter();
//   } else {
//     this.sendOnPressCtrlEnter();
//   }
// };

// private sendOnPressEnter = () => {
//   if (
//     KEY_CODES.ENTER in this.pressedKeysMap &&
//     !(KEY_CODES.CTRL in this.pressedKeysMap)
//   ) {
//     this.sendChatMessage();
//     this.cleanMessageInput();
//   } else {
//     return; // For more readability - return explicitly (in JS all functions return undefined implicitly).
//   }
// };

// private sendOnPressCtrlEnter = () => {
//   if (
//     KEY_CODES.CTRL in this.pressedKeysMap &&
//     KEY_CODES.ENTER in this.pressedKeysMap
//   ) {
//     this.sendChatMessage();
//     this.cleanMessageInput();
//   } else {
//     return;
//   }
// };

// private cleanMessageInput = (): void => {
//   this.setState({ chatMessage: "" });
//   if (this.messagesInputRef.current as HTMLInputElement) {
//     (this.messagesInputRef.current as HTMLInputElement).focus();
//   }
// };
// }

// const mapDispatchToProps = (
//   dispatch: Dispatch<AnyAction>
// ): IChatDispatchProps => ({
//   send: (message: IMessage) => dispatch(sendMessage(message)),
// });

// export default connect(mapDispatchToProps, null)(ChatInput);
export default ChatInput