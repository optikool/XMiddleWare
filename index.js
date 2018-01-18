/*jshint esversion: 6 */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const fileUpload = require('express-fileupload');

global.__base = __dirname;
global.__settings = require('./settings').ServerSettings;

const options = {
    customValidators: {
        isImage: function(value, filename) {
            switch (filename.toLowerCase()) {
                case 'image/jpeg':
                case 'image/png':
                case 'image/gif':
                    return true;
                default:
                    return false;
            }
        }
    }
};

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(expressValidator(options));
app.use(fileUpload());

// Add headers
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use(require('./controllers'));

console.log(`Server started on host ${__settings.host}, port ${__settings.port}...`);
app.listen(__settings.port);