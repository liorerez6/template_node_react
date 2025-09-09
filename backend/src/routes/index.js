const express = require('express');
const router = express.Router();

const healthRoutes = require('./health.routes');
const picturesRoutes = require('./pictures.routes'); // ← חדש

// כל ה-API תחת /api
router.use('/health', healthRoutes);
router.use('/pictures', picturesRoutes); // ← חדש: /api/pictures

module.exports = router;
