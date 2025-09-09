const express = require('express');
const router = express.Router();
const { list, getByPicture } = require('../controllers/messages.controller');

router.get('/', list);

router.get('/:pictureId', getByPicture);

module.exports = router;