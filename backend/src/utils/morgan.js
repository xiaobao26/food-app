const morgan = require("morgan");
const config = require("../config/index");
const logger = require("./logger");

module.exports = morgan(config.NODE_ENV === 'dev' ? 'tiny' : 'combined', {
    stream: logger.stream,
});
