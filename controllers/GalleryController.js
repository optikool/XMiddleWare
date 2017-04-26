'use strict';

const express = require('express');
const router = express.Router();

const service = require('../services').GalleryService;

router.get('/', service.getAll);
router.get('/:id/:itemid', service.getGalleries);
router.get('/:id/:catid/:itemid', service.getGallery);

module.exports = router;