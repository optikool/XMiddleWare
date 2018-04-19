'use strict';

const express = require('express');
const BaseService = new require('./BaseService');
const querystring = require('querystring');

const router = express.Router();

const settings = require('../settings/endpoints.constants');

module.exports = class GalleryService {
    static getAll(req, res, next) {
        let query = {
            limit: Number.parseInt(req.params.limit)
        };

        const endpoint = settings.path + querystring.stringify(Object.assign(settings.galleryMain.query, query));
        const headers = req.headers;

        const handleResponse = (response, body) => {
            if (response.statusCode === 200) {
                res.status(response.statusCode).json(JSON.parse(body));
            } else {
                res.status(response.statusCode).json(JSON.parse(body));
            }
        };

        BaseService.getData(endpoint, handleResponse, headers);
    }

    static getGalleries(req, res, next) {
        let query = {
            id: Number.parseInt(req.params.id),
            Itemid: Number.parseInt(req.params.itemid)
        };

        const headers = req.headers;
        const endpoint = settings.path + querystring.stringify(Object.assign(settings.galleryCategory.query, query));

        const handleResponse = (response, body) => {
            if (response.statusCode === 200) {
                res.status(response.statusCode).json(JSON.parse(body));
            } else {
                res.status(response.statusCode).json(JSON.parse(body));
            }
        };

        BaseService.getData(endpoint, handleResponse, headers);
    }

    static getGallery(req, res, next) {
        let query = {
            id: Number.parseInt(req.params.id),
            catid: Number.parseInt(req.params.catid),
            Itemid: Number.parseInt(req.params.itemid)
        };

        const headers = req.headers;
        const endpoint = settings.path + querystring.stringify(Object.assign(settings.collection.query, query));

        const handleResponse = (response, body) => {
            if (response.statusCode === 200) {
                res.status(response.statusCode).json(JSON.parse(body));
            } else {
                res.status(response.statusCode).json(JSON.parse(body));
            }
        };

        BaseService.getData(endpoint, handleResponse, headers);
    }

    static getRandomGallery(req, res, next) {
        let query = {
            limit: Number.parseInt(req.params.limit)
        };

        const headers = req.headers;
        const endpoint = settings.path + querystring.stringify(Object.assign(settings.galleryRandom.query, query));

        const handleResponse = (response, body) => {
            if (response.statusCode === 200) {
                res.status(response.statusCode).json(JSON.parse(body));
            } else {
                res.status(response.statusCode).json(JSON.parse(body));
            }
        };

        BaseService.getData(endpoint, handleResponse, headers);
    }

    static getCollection(req, res, next) {
        let query = {
            id: Number.parseInt(req.params.id),
            catid: Number.parseInt(req.params.catid),
            Itemid: Number.parseInt(req.params.itemid)
        };;

        const headers = req.headers;
        const endpoint = settings.path + querystring.stringify(Object.assign(settings.collection.query, query));

        const handleResponse = (response, body) => {
            if (response.statusCode === 200) {
                res.status(response.statusCode).json(JSON.parse(body));
            } else {
                res.status(response.statusCode).json(JSON.parse(body));
            }
        };

        BaseService.getData(endpoint, handleResponse, headers);
    }

    static getPopularGallery(req, res, next) {
        let query = {
            limit: Number.parseInt(req.params.limit)
        };

        const headers = req.headers;
        const endpoint = settings.path + querystring.stringify(Object.assign(settings.galleryPopular.query, query));

        const handleResponse = (response, body) => {
            if (response.statusCode === 200) {
                res.status(response.statusCode).json(JSON.parse(body));
            } else {
                res.status(response.statusCode).json(JSON.parse(body));
            }
        };

        BaseService.getData(endpoint, handleResponse, headers);
    }

    static getRandomCollection(req, res, next) {
        let query = {
            sort: 'random'
        };

        const headers = req.headers;
        const endpoint = settings.path + querystring.stringify(Object.assign(settings.collection.query, query));

        const handleResponse = (response, body) => {
            if (response.statusCode === 200) {
                res.status(response.statusCode).json(JSON.parse(body));
            } else {
                res.status(response.statusCode).json(JSON.parse(body));
            }
        };

        BaseService.getData(endpoint, handleResponse, headers);

    }
};