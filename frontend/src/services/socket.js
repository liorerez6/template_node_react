import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000';

class SocketService {
  constructor() {
    this.socket = null;
  }

  connect() {
    if (!this.socket) {
      this.socket = io(SOCKET_URL);
    }
    return this.socket;
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  joinPictureRoom(pictureId) {
    if (this.socket) {
      this.socket.emit('joinPictureRoom', pictureId);
    }
  }

  sendMessage(messageData) {
    if (this.socket) {
      this.socket.emit('sendMessage', messageData);
    }
  }

  onLoadMessages(callback) {
    if (this.socket) {
      this.socket.on('loadMessages', callback);
    }
  }

  onNewMessage(callback) {
    if (this.socket) {
      this.socket.on('newMessage', callback);
    }
  }

  offAllListeners() {
    if (this.socket) {
      this.socket.off('loadMessages');
      this.socket.off('newMessage');
    }
  }
}

export default new SocketService();