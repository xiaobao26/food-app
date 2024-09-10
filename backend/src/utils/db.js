const mongoose = require('mongoose');
const config = require('../config/index');
const createLogger = require('./logger');
const logger = createLogger(__filename);


const connectToDB = async () => {
    const db = mongoose.connection;

    // error
    // listen error happen during the db connection time, 
    // if happen, manually stop and exit by using ->  process.exit(1)
    db.on("error", (error) => {
        logger.error(error);
        process.exit(1);
    })

    // connected
    db.on("connected", () => {
        logger.info("DB connected!");
    })

    // disconnected
    db.on("disconnected", () => {
        logger.warn("DB disconnected!");
    })

    return mongoose.connect(config.DB_CONNECTION_STRING);
}


module.exports = connectToDB;