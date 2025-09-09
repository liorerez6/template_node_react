const messages = require('../data/messages');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Join room for specific picture
    socket.on('joinPictureRoom', (pictureId) => {
      socket.join(`picture-${pictureId}`);
      console.log(`Socket ${socket.id} joined room: picture-${pictureId}`);
      
      // Send existing messages for this picture
      const pictureMessages = messages.filter(msg => msg.pictureId === pictureId);
      socket.emit('loadMessages', pictureMessages);
    });

    // Handle new message
    socket.on('sendMessage', (messageData) => {
      const newMessage = {
        id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        text: messageData.text,
        pictureId: messageData.pictureId,
        timestamp: new Date().toISOString(),
        socketId: socket.id
      };

      // Save message
      messages.push(newMessage);

      // Send to all users in the picture room
      io.to(`picture-${messageData.pictureId}`).emit('newMessage', newMessage);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};