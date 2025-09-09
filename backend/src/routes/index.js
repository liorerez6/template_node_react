const express = require('express');
const router = express.Router();

const healthRoutes = require('./health.routes');
const picturesRoutes = require('./pictures.routes');
const messagesRoutes = require('./messages.routes'); // ← חדש

// כל ה-API תחת /api
router.use('/health', healthRoutes);
router.use('/pictures', picturesRoutes);
router.use('/messages', messagesRoutes); // ← חדש: /api/messages

module.exports = router;