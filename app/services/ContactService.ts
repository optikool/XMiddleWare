'use strict';

const express = require('express');
const BaseService = new require('./BaseService');
const querystring = require('querystring');

const router = express.Router();

const settings = require('../settings/endpoints.constants');

module.exports = class ContactService {
    static getContact(req, res, next) {
        const headers = req.headers;
        const endpoint = settings.path + querystring.stringify(settings.contact.get);

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

        BaseService.getData(endpoint, handleResponse, headers);
    }

    static sendMessage(req, res, next) {
        let query = {
            'jform[contact_name]': req.body.name,
            'jform[contact_email]': req.body.email,
            'jform[contact_subject]': req.body.subject,
            'jform[contact_message]': req.body.message,
            'recaptcha_challenge_field': req.body.recaptcha_challenge_field,
            'recaptcha_response_field': req.body.recaptcha_response_field
        };

        const headers = req.headers;
        const endpoint = settings.path;
        const body = querystring.stringify(Object.assign(settings.contact.query, query));

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

        BaseService.sendData(endpoint, body, handleResponse, headers);
    }
};

// name:Dana
// email:optikool@yahoo.com
// subject:Test
// message:This is a test
// recaptcha_challenge_field:03AIezHSZm1wCs9PVUtvBdVFj6tMgSmL_Bd9hsjTOiRrvN1tkRAkOJofllpt9Fyk0TTknmsFI6p2seMPR_CpxIEDVfINjWCO-2a0-EFOqx5ynkrkiR53PLQVCI5xzdxY9AIrFcWvTMzKzWwPpH0SCGxADgP4l87JcNfn0vUrEDodN6kxP0ROJT_0vXgxQkRThiJPmfXK6dfJhL
// recaptcha_response_field:BBVA Sabateria
// option:com_contact
// task:contact.submit
// id:1:contact-me
// return:
// submit:Send Email
// 42ceb5fe26040262c1f82c3b031d0974:1

// jform[contact_name]:Dana
// jform[contact_email]:optikool@yahoo.com
// jform[contact_subject]:Test
// jform[contact_message]:This is a test
// submit:Send Email
// recaptcha_challenge_field:03AIezHSZm1wCs9PVUtvBdVFj6tMgSmL_Bd9hsjTOiRrvN1tkRAkOJofllpt9Fyk0TTknmsFI6p2seMPR_CpxIEDVfINjWCO-2a0-EFOqx5ynkrkiR53PLQVCI5xzdxY9AIrFcWvTMzKzWwPpH0SCGxADgP4l87JcNfn0vUrEDodN6kxP0ROJT_0vXgxQkRThiJPmfXK6dfJhL
// recaptcha_response_field:BBVA Sabateria
// option:com_contact
// task:contact.submit
// return:
// id:1:contact-me
// 42ceb5fe26040262c1f82c3b031d0974:1