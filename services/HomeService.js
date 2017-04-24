'use strict';

const express = require('express');
const BaseService = new require('./BaseService');
const querystring = require('querystring');

const router = express.Router();

const settings = require('../settings/endpoints.constants');

module.exports = class HomeService {
    static getHomeContent(req, res, next) {
        const endpoint = settings.home.path + querystring.stringify(settings.home.query);

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