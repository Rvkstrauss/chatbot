import * as React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import Message from "../Message";
import { IMessage } from "../../types";
import StyledMessagesList from "./StyledMessagesList";

const ChatArea = () => {

  const messages = useSelector((state: RootStateOrAny) => {
    return state.messageState.messages
  });

  return (
    <StyledMessagesList>
      {messages &&
        messages.map((element: IMessage, idx: number) => {
          return (
            <React.Fragment key={idx}>
              <Message message={element} />
            </React.Fragment>
          );
        })}
    </StyledMessagesList>
  );
};

export default ChatArea;

// import * as React from 'react';
// import { connect } from 'react-redux';
// import Message from '../Message';
// import { scrollToBottom } from '../../utils/common';
// import { IMessage } from '../../types';
// import StyledMessagesList from './StyledMessagesList';
// import { AnyAction } from 'redux';
// import { connectSocket } from '../../store/socket/actions';
// import { readRecord } from 'src/utils/storage-service';

// interface IChatAreaState {
//   messages: []
// }

// interface IChatAreaProps {
//   connectChat:() => void,

// }

// export class ChatArea extends React.Component {

//   public state = {
//     username: readRecord("username") || "guest",
//     messages: []
//   };

//   private chatAreaRef = React.createRef<HTMLDivElement>();
//   public render() {
//     const { messages } = this.state;
//     const { connectChat } = this.props as IChatAreaProps;
//     connectChat();
//     return (
//       <StyledMessagesList ref={this.chatAreaRef}>
//           {messages && messages.map((element: IMessage, idx: number) => {
//             return (
//               <React.Fragment key={idx}>
//                 <Message message={element}/>
//               </React.Fragment>
//             )
//           })}
//       </StyledMessagesList>
//     );
//   }

//   public componentDidUpdate(): void {
//     const chatAreaElement: Element = this.chatAreaRef.current as Element;
//     const shouldScroll: boolean = chatAreaElement.scrollTop + chatAreaElement.clientHeight !== chatAreaElement.scrollHeight;

//     if (shouldScroll) {
//       scrollToBottom(chatAreaElement);
//     }
//   }
// }

// const mapStateToProps = (state: IChatAreaState) => ({
//   messages: state.messages
// });

// const mapDispatchToProps = (
//   dispatch: React.Dispatch<AnyAction>
// ): any => ({
//   connectChat: () => dispatch(connectSocket()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
