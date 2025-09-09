const express = require('express');
const router = express.Router();
const { list } = require('../controllers/pictures.controller');

// GET /api/pictures  → מחזיר רשימת תמונות קשיחה לשלב 1
router.get('/', list);

module.exports = router;
