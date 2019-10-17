'use strict';

import express from 'express';
const router: express.Router = express.Router();

router.use('/service/contact', require('./subroutes/ContactRoute'));
router.use('/service/content', require('./subroutes/ContentRoute'));
router.use('/service/gallery', require('./subroutes/GalleryRoute'));
router.use('/service/movie', require('./subroutes/MovieRoute'));
router.use('/service/home', require('./subroutes/HomeRoute'));

router.get('/', (req, res) => {
    res.send('This is not the server you are looking for...');
});

module.exports = router;