import socketService from '../../services/socket';

export const CHAT_LOAD_MESSAGES = 'CHAT_LOAD_MESSAGES';
export const CHAT_ADD_MESSAGE = 'CHAT_ADD_MESSAGE';
export const CHAT_SET_CONNECTED = 'CHAT_SET_CONNECTED';

export const connectToChat = (pictureId) => (dispatch) => {
  const socket = socketService.connect();
  
  socket.on('connect', () => {
    dispatch({ type: CHAT_SET_CONNECTED, payload: true });
    socketService.joinPictureRoom(pictureId);
  });

  socketService.onLoadMessages((messages) => {
    dispatch({ type: CHAT_LOAD_MESSAGES, payload: messages });
  });

  socketService.onNewMessage((message) => {
    dispatch({ type: CHAT_ADD_MESSAGE, payload: message });
  });
};

export const sendMessage = (text, pictureId) => (dispatch) => {
  const messageData = {
    text: text.trim(),
    pictureId
  };
  
  socketService.sendMessage(messageData);
};

export const disconnectFromChat = () => (dispatch) => {
  socketService.offAllListeners();
  socketService.disconnect();
  dispatch({ type: CHAT_SET_CONNECTED, payload: false });
};