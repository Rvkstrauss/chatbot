import { IMessage } from 'src/types';

export const SEND_MESSAGE_RESPONSE = 'SEND_MESSAGE_RESPONSE';
export const MESSAGE_SENT = 'MESSAGE_SENT';
export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
export const USER_CHANGED = 'USER_CHANGED';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES'

export const messageReceived = (message: IMessage) => {
  return {
    type: SEND_MESSAGE_RESPONSE,
    message
  };
};

export const sendMessage = (message: IMessage) => {
  return {
    type: SEND_MESSAGE_REQUEST,
    message
  };
};

export const messageSent = (message: IMessage) => {
  return {
    type: MESSAGE_SENT,
    message
  };
};

export const changeUsername = (username: string) => {
  return {
    type: USER_CHANGED,
    username
  };
};

export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES,
  }
}