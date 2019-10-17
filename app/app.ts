/*jshint esversion: 6 */
'use strict';

import express = require('express');
import bodyParser = require('body-parser');
import morgan = require('morgan');
import path = require('path');
const expressValidator = require('express-validator');
const  winston = require('./config/winston');
// const fileUpload = require('express-fileupload');

const base = __dirname;
const settings = require('./settings').ServerSettings;

const options = {
    customValidators: {
        isImage: function(value: string, filename: string) {
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

const app: express.Application = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator(options));
app.use(morgan('combined', { stream: winston.stream }));
// app.use(fileUpload());

// Add headers
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {

    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.71:4200');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Pass to next layer of middleware
    next();
});

app.use(require('./routes'));

console.log(`Server started on host ${settings.host}, port ${settings.port}...`);
app.listen(settings.port);

process.on('uncaughtException', (err) => {
    console.log('Caught exception: ', err);
});