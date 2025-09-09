import { CHAT_LOAD_MESSAGES, CHAT_ADD_MESSAGE, CHAT_SET_CONNECTED } from '../actions/chatActions';

const initialState = {
  messages: [],
  isConnected: false,
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case CHAT_LOAD_MESSAGES:
      return {
        ...state,
        messages: action.payload || [],
      };
    case CHAT_ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case CHAT_SET_CONNECTED:
      return {
        ...state,
        isConnected: action.payload,
      };
    default:
      return state;
  }
}