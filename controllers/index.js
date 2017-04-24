'use strict';

const express = require('express');
const router = express.Router();

router.use('/service/contact', new require('./ContactController'));
router.use('/service/content', new require('./ContentController'));
router.use('/service/gallery', new require('./GalleryController'));
router.use('/service/home', new require('./HomeController'));

router.get('/', (req, res) => {
    res.send('This is not the server you are looking for...');
});

module.exports = router;