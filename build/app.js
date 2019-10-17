/*jshint esversion: 6 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var path = require("path");
var expressValidator = require('express-validator');
var winston = require('./config/winston');
// const fileUpload = require('express-fileupload');
var base = __dirname;
var settings = require('./settings').ServerSettings;
var options = {
    customValidators: {
        isImage: function (value, filename) {
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
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator(options));
app.use(morgan('combined', { stream: winston.stream }));
// app.use(fileUpload());
// Add headers
app.use(function (req, res, next) {
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
console.log("Server started on host " + settings.host + ", port " + settings.port + "...");
app.listen(settings.port);
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err);
});
