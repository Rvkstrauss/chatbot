import * as React from 'react';
import StyledMessage from './StyledMessage';
import { IMessage } from '../../types';

class Message extends React.Component<{ message: IMessage }> {
  public render() {
    const { message } = this.props;

    return (
      <React.Fragment>
        <StyledMessage type={message.from}>
          {message.content}
        </StyledMessage>
      </React.Fragment>

    );
  }
}

export default Message;