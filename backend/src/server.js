const app = require('./app');
const { createServer } = require('http');
const { Server } = require('socket.io');

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173'],
    credentials: true,
  }
});

require('./socket/socketHandlers')(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`API ready on http://localhost:${PORT}`);
});