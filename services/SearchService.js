'use strict';

const express = require('express');
const BaseService = new require('./BaseService');
const querystring = require('querystring');

const router = express.Router();

const settings = require('../settings/endpoints.constants');

module.exports = class SearchService {
    static getSearchResults(req, res, next) {
        let query = {
            searchword: req.params.searchword
        };

        const endpoint = settings.path + querystring.stringify(Object.assign(settings.search.query, query));

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
}