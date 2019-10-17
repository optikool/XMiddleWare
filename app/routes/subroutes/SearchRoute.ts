'use strict';

import express = require('express');
const router: express.Router = express.Router();

const service = require('../../services').GalleryService;

router.get('/:searchword', service.getAll);

module.exports = router;