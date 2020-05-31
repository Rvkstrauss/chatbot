import * as React from "react";
import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import { sendMessage } from "../../store/message/actions";
import StyledChatInput from "./StyledChatInput";
import { readRecord } from "../../utils/storage-service";
import sendButton from "../../images/submit_icon.png";
import { IMessage } from "../../types";

interface IChatDispatchProps {
  send: (message: IMessage) => void;
}

const KEY_CODES = {
  ENTER: "Enter",
  CTRL: "Control",
};

export class ChatInput extends React.Component {
  public state = {
    username: readRecord("username") || "guest",
    chatMessage: "",
    greet: false,
  };
  private messagesInputRef = React.createRef<HTMLInputElement>();
  private pressedKeysMap: {} = {};

  public componentDidMount(): void {

    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  public componentWillUnmount(): void {
    document.removeEventListener("keydown", this.handleKeyPress);
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  public render() {
    const { chatMessage } = this.state;

    return (
      <StyledChatInput>
        <input
          className={"chat"}
          type="text"
          ref={this.messagesInputRef}
          value={chatMessage}
          onChange={this.handleOnChange}
        />
        <button className={"send"} onClick={this.handleClick}>
          <img src={sendButton} />
        </button>
      </StyledChatInput>
    );
  }

  private handleKeyUp = () => {
    this.pressedKeysMap = {};
  };

  private handleKeyPress = (e: KeyboardEvent) => {
    e = e || event;
    this.pressedKeysMap[e.key] = e.type === "keydown";

    if (readRecord("ctrlEnterSending") !== "On") {
      this.sendOnPressEnter();
    } else {
      this.sendOnPressCtrlEnter();
    }
  };

  private sendOnPressEnter = () => {
    if (
      KEY_CODES.ENTER in this.pressedKeysMap &&
      !(KEY_CODES.CTRL in this.pressedKeysMap)
    ) {
      this.sendChatMessage();
      this.cleanMessageInput();
    } else {
      return; // For more readability - return explicitly (in JS all functions return undefined implicitly).
    }
  };

  private sendOnPressCtrlEnter = () => {
    if (
      KEY_CODES.CTRL in this.pressedKeysMap &&
      KEY_CODES.ENTER in this.pressedKeysMap
    ) {
      this.sendChatMessage();
      this.cleanMessageInput();
    } else {
      return;
    }
  };

  private handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ chatMessage: e.currentTarget.value });
  };

  private handleClick = () => {
    this.sendChatMessage();
    this.cleanMessageInput();
  };

  private sendChatMessage = (): void => {
    const { send } = this.props as IChatDispatchProps;
    const { username, chatMessage } = this.state;
    if (chatMessage !== "") {
      // @ts-ignore
      debugger;
      const type = this.getMessageType();
      send({ from: username, content: chatMessage, type });
    }
  };

  private getMessageType = () => {
    const { username, greet } = this.state;
    if (!username || username === "guest") {
      return "greetNew";
    } else if (!greet) {
      return "greetOld";
    } else {
      return "calculate";
    }
  };

  private cleanMessageInput = (): void => {
    this.setState({ chatMessage: "" });
    if (this.messagesInputRef.current as HTMLInputElement) {
      (this.messagesInputRef.current as HTMLInputElement).focus();
    }
  };
}

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IChatDispatchProps => ({
  send: (message: IMessage) => dispatch(sendMessage(message)),
});

export default connect(mapDispatchToProps, null)(ChatInput);
