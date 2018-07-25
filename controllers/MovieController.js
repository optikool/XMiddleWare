'use strict';

const express = require('express');
const router = express.Router();

const service = require('../services').MovieService;

router.get('/:limit', service.getAll);
router.get('/main/:limit', service.getAll);
router.get('/main/random/:limit', service.getRandomMovie);
router.get('/main/popular/:limit', service.getPopularMovie);
router.get('/category/:id/:itemid', service.getMovies);
router.get('/single/random', service.getRandomMovie);
router.get('/single/:id/:catid/:itemid', service.getMovie);

module.exports = router;