"use strict";
var path = require('path');
var winston = require('winston');
var rootDir = require('../utils/path');
var appLog = path.join(rootDir, 'logs', 'app.log');
var options = {
    file: {
        level: 'debug',
        filename: appLog,
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};
var logger = winston.createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false,
});
logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    },
};
module.exports = logger;
