import Socket from "./Socket";
import { CONNECT_SOCKET, connectionChanged } from "../actions";
import { messageReceived, messageSent, SEND_MESSAGE_REQUEST, MESSAGE_SENT } from "../../message/actions";
import { IMessage } from 'src/types';

const socketMiddleware = (store: any) => {

  const onConnectionChange = (isConnected: boolean) => {
    store.dispatch(connectionChanged(isConnected));
  };

  const onIncomingMessage = (message: IMessage) => store.dispatch(messageReceived(message));

  const socket = new Socket(onConnectionChange, onIncomingMessage);

  return (next: any) => (action: any) => {
    const messageState = store.getState().messageState;
    const socketState = store.getState().socketState;
    
    switch (action.type) {
      case CONNECT_SOCKET:
        socket.connect(messageState.username, process.env.PORT || socketState.port);
        break;

      case SEND_MESSAGE_REQUEST:
        store.dispatch(messageSent(action.message));
        break;
      case MESSAGE_SENT:
        socket.sendMessage(action.message);
      default:
        break;
    }

    return next(action)
  };
};

export default socketMiddleware;