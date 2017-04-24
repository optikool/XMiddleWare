'use strict';

const express = require('express');
const router = express.Router();

const service = require(__base + '/services').HomeService;

router.get('/', service.getHomeContent);

module.exports = router;