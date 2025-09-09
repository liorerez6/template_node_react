const messages = require('../data/messages');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('joinPictureRoom', (pictureId) => {
      socket.join(`picture-${pictureId}`);
      console.log(`Socket ${socket.id} joined room: picture-${pictureId}`);
      
      const pictureMessages = messages.filter(msg => msg.pictureId === pictureId);
      socket.emit('loadMessages', pictureMessages);
    });

    socket.on('sendMessage', (messageData) => {
      const newMessage = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        text: messageData.text,
        pictureId: messageData.pictureId,
        timestamp: new Date().toISOString(),
        socketId: socket.id
      };

      messages.push(newMessage);

      io.to(`picture-${messageData.pictureId}`).emit('newMessage', newMessage);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};