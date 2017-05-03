'use strict';

const express = require('express');
const router = express.Router();

const service = require('../services').ContactService;

router.get('/', service.getContact);
router.post('/', service.sendMessage);

module.exports = router;