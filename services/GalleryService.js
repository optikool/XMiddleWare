'use strict';

const express = require('express');
const BaseService = new require('./BaseService');
const querystring = require('querystring');

const router = express.Router();

const settings = require('../settings/endpoints.constants');

module.exports = class GalleryService {
    static getGalleriest(req, res, next) {
        let query = {
            id: req.params.id,
            Itemid: req.params.itemid
        };

        const endpoint = settings.path + querystring.stringify(Object.assign(settings.galleryCategory.query, query));

        const handleResponse = (response, body) => {
            console.log('Received response');
            console.log(response);
            console.log(body);

            if (response.statusCode === 200) {
                res.status(response.statusCode).json(body);
            } else {
                res.status(response.statusCode).json(body);
            }
        };

        BaseService.getData(endpoint, handleResponse);
    }

    static getGallery(req, res, next) {
        let query = {
            id: req.params.id,
            catid: req.params.catid,
            Itemid: req.params.itemid
        };

        const endpoint = settings.path + querystring.stringify(Object.assign(settings.gallery.query, query));

        const handleResponse = (response, body) => {
            console.log('Received response');
            console.log(response);
            console.log(body);

            if (response.statusCode === 200) {
                res.status(response.statusCode).json(body);
            } else {
                res.status(response.statusCode).json(body);
            }
        };

        BaseService.getData(endpoint, handleResponse);
    }
};