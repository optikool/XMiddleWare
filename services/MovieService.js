'use strict';

const express = require('express');
const BaseService = new require('./BaseService');
const querystring = require('querystring');

const router = express.Router();

const settings = require('../settings/endpoints.constants');

module.exports = class MovieService {
    static getAll(req, res, next) {
        let query = {
            limit: Number.parseInt(req.params.limit)
        };

        const endpoint = settings.path + querystring.stringify(Object.assign(settings.movieMain.query, query));
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

    static getMovies(req, res, next) {
        let query = {
            id: Number.parseInt(req.params.id),
            Itemid: Number.parseInt(req.params.itemid)
        };

        const headers = req.headers;
        const endpoint = settings.path + querystring.stringify(Object.assign(settings.movieCategory.query, query));

        const handleResponse = (response, body) => {
            if (response.statusCode === 200) {
                res.status(response.statusCode).json(JSON.parse(body));
            } else {
                res.status(response.statusCode).json(JSON.parse(body));
            }
        };

        BaseService.getData(endpoint, handleResponse, headers);
    }

    static getMovie(req, res, next) {
        let query = {
            id: Number.parseInt(req.params.id),
            catid: Number.parseInt(req.params.catid),
            Itemid: Number.parseInt(req.params.itemid)
        };

        const headers = req.headers;
        const endpoint = settings.path + querystring.stringify(Object.assign(settings.movie.query, query));

        const handleResponse = (response, body) => {
            if (response.statusCode === 200) {
                res.status(response.statusCode).json(JSON.parse(body));
            } else {
                res.status(response.statusCode).json(JSON.parse(body));
            }
        };

        BaseService.getData(endpoint, handleResponse, headers);
    }

    static getRandomMovie(req, res, next) {
        let query = {
            limit: Number.parseInt(req.params.limit)
        };

        const headers = req.headers;
        const endpoint = settings.path + querystring.stringify(Object.assign(settings.movieRandom.query, query));

        const handleResponse = (response, body) => {
            if (response.statusCode === 200) {
                res.status(response.statusCode).json(JSON.parse(body));
            } else {
                res.status(response.statusCode).json(JSON.parse(body));
            }
        };

        BaseService.getData(endpoint, handleResponse, headers);
    }

    // static getMovie(req, res, next) {
    //     let query = {
    //         id: Number.parseInt(req.params.id),
    //         catid: Number.parseInt(req.params.catid),
    //         Itemid: Number.parseInt(req.params.itemid)
    //     };;

    //     const headers = req.headers;
    //     const endpoint = settings.path + querystring.stringify(Object.assign(settings.movie.query, query));

    //     const handleResponse = (response, body) => {
    //         if (response.statusCode === 200) {
    //             res.status(response.statusCode).json(JSON.parse(body));
    //         } else {
    //             res.status(response.statusCode).json(JSON.parse(body));
    //         }
    //     };

    //     BaseService.getData(endpoint, handleResponse, headers);
    // }

    static getPopularMovie(req, res, next) {
        let query = {
            limit: Number.parseInt(req.params.limit)
        };

        const headers = req.headers;
        const endpoint = settings.path + querystring.stringify(Object.assign(settings.moviePopular.query, query));

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