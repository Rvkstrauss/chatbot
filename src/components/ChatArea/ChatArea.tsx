import * as React from 'react';
import { connect } from 'react-redux';
import Message from '../Message';
import { scrollToBottom } from '../../utils/common';
import { IMessage } from '../../types';
import StyledMessagesList from './StyledMessagesList';

interface IChatAreaState {
  messageState: {
    messages: []
  }
}

interface IChatAreaProps {
    messages: [],
    connect:() => void
}

export class ChatArea extends React.Component {
  
  private chatAreaRef = React.createRef<HTMLDivElement>();
  public render() {
    const { messages } = this.props as IChatAreaProps;
    connect();
    return (
      <StyledMessagesList ref={this.chatAreaRef}>
          {messages.map((element: IMessage, idx: number) => {
            return (
              <React.Fragment key={idx}>
                <Message message={element}/>
              </React.Fragment>
            )
          })}
      </StyledMessagesList>
    );
  }

  public componentDidUpdate(): void {
    const chatAreaElement: Element = this.chatAreaRef.current as Element;
    const shouldScroll: boolean = chatAreaElement.scrollTop + chatAreaElement.clientHeight !== chatAreaElement.scrollHeight;

    if (shouldScroll) {
      scrollToBottom(chatAreaElement);
    }
  }
}

const mapStateToProps = (state: IChatAreaState) => ({
  messages: state.messageState.messages
});

export default connect(mapStateToProps, null)(ChatArea);