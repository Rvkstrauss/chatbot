import { SEND_MESSAGE_RESPONSE, MESSAGE_SENT, USER_CHANGED, CLEAR_MESSAGES } from '../actions';
import { readRecord } from '../../../utils/storage-service';
import { IMessage } from 'src/types';
import config from 'src/config';

const INITIAL_STATE = {
  username: readRecord(config.USERNAME) || config.GUEST,
  messages: [],
  loading: true
};

function messageReducer(state = INITIAL_STATE, action: {username?: string, type: string, message: IMessage}) {
  switch (action.type) {
    case USER_CHANGED:
      return Object.assign({},
        state, {username: action.username}
      );
    case SEND_MESSAGE_RESPONSE:
      if (!action.message) {return state};
      return {
        ...state,
        messages: [...state.messages, action.message],
        loading: false
      };
    case MESSAGE_SENT:
      if (!action.message) {return state};
      return {
        ...state,
        messages: [...state.messages, action.message],
        loading: true
      };
    case CLEAR_MESSAGES:
      return {
        messages: []
      }  
    default:
      return state;
  }
}

export default messageReducer;