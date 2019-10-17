import path = require('path');
import winston = require('winston');
const rootDir = require('../utils/path');

const appLog = path.join(rootDir, 'logs', 'app.log');

const options = {
    file: {
      level: 'debug',
      filename: appLog,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
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

const logger = winston.createLogger({
    transports: [
      new winston.transports.File(options.file),
      new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
});

// logger.stream = {
//     write: (message: any, encoding: any) => {
//       logger.info(message);
//     },
// };

module.exports = logger