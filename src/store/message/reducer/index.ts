import { SEND_MESSAGE_RESPONSE, MESSAGE_SENT, USER_CHANGED } from '../actions';
import { readRecord } from '../../../utils/storage-service';
import { IMessage } from 'src/types';

const INITIAL_STATE = {
  username: readRecord('username') || 'guest',
  messages: []
};

function messageReducer(state = INITIAL_STATE, action: {username?: string, type: string, message: IMessage}) {
  switch (action.type) {
    case USER_CHANGED:
      return Object.assign({},
        state, {username: action.username}
      );
    case SEND_MESSAGE_RESPONSE:
      if (!action.message) {return state};
      // const isMessageTypeSent = (action.message.from === state.username);
      // action.message = Object.assign(action.message, {type: isMessageTypeSent ? 'sent'  : 'received'});
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    case MESSAGE_SENT:  

    default:
      return state;
  }
}

export default messageReducer;