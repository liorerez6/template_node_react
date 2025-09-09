const express = require('express');
const router = express.Router();

const picturesRoutes = require('./pictures.routes');
const messagesRoutes = require('./messages.routes'); 

router.use('/pictures', picturesRoutes);
router.use('/messages', messagesRoutes); 

module.exports = router;