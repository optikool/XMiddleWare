'use strict';

const express = require('express');
const BaseService = new require('./BaseService');
const querystring = require('querystring');

const router = express.Router();

const settings = require('../settings/endpoints.constants');

module.exports = class ContentService {
    static getContent(req, res, next) {
        let query = {
            id: req.params.id,
            Itemid: req.params.itemid
        };

        const endpoint = settings.path + querystring.stringify(Object.assign(settings.articleCategory.query, query));

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

    static getArticle(req, res, next) {
        let query = {
            id: req.params.id,
            catid: req.params.catid,
            Itemid: req.params.itemid
        };

        const endpoint = settings.path + querystring.stringify(Object.assign(settings.article.query, query));

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