'use strict';

import express = require('express');
const router: express.Router = express.Router();

const service = require('../../services').HomeService;

router.get('/', service.getHomeContent);

module.exports = router;