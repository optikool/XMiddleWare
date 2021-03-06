'use strict';

import express = require('express');
const router: express.Router = express.Router();

const service = require('../../services').ContentService;

router.get('/:id/:itemid', service.getContent);
router.get('/:id/:catid/:itemid', service.getArticle);

module.exports = router;