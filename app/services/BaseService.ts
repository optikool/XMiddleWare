'use strict';

const express = require('express');
const http = require('http');

const settings = require('../settings').ServerSettings;

const router = express.Router();

module.exports = class BaseService {
    static getData(path, callback, headers) {
        const options = {
            host: settings.host,
            port: 80,
            path: path,
            method: 'GET'
        };
		const url = 'http://' + settings.host + path;

        if (headers) {
            options.headers = headers;
        }

        let body = [];
        console.log('options: ', options);
        const request = http.request(url, (response) => {
            // console.log(`STATUS: ${response.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                body.push(chunk);
            });
            response.on('end', () => {
                console.log('No more data in response. ', response);
                callback(response, body.concat());
            });
        });

        request.on('error', (e) => {
            console.error(`problem with request: ${e.message}`);
            callback(e);
        });

        // write data to request body
        request.end();
    }

    static sendData(path, data, callback, headers) {
        const options = {
            hostname: settings.host,
            port: 80,
            path: path,
            method: 'GET'
        };
		const url = 'http://' + settings.host + path;

        if (headers) {
            options.headers = headers;
        }

        let body = [];
        console.log('options: ', options);
        const request = http.request(options, (response) => {
            // console.log(`STATUS: ${response.statusCode}`);
            // console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                //console.log(`BODY: ${chunk}`);
                body.push(chunk);
            });
            response.on('end', () => {
                console.log('No more data in response. ', response);
                callback(response, body.concat());
            });
        });

        request.on('error', (e) => {
            console.error(`problem with request: ${e.message}`);
            callback(e);
            //res.status(400).send(e);
        });

        // write data to request body
        request.write(data);
        request.end();
    }
}