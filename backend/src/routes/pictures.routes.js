const express = require('express');
const router = express.Router();
const { list } = require('../controllers/pictures.controller');

router.get('/', list);

module.exports = router;
