const config = require('./config/index');
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

const morgan = require('./utils/morgan');
const createLogger = require("./utils/logger");
const logger = createLogger(__filename);
const rateLimit = require("./utils/rateLimit");
const formatResponseMiddleware = require("./middlewares/formatResponse.middlewares");
const unknownErrorMiddlewares = require('./middlewares/error/unknownError.middlewares');
const connectToDB = require('./utils/db');


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan);
app.use(rateLimit);
app.use(formatResponseMiddleware);


app.get("/", (req, res) => {
    res.formatResponse('all good!')
})
app.use(unknownErrorMiddlewares);

connectToDB().then(() => {
    app.listen(config.PORT, ()=> {
        logger.info(`Server running at ${config.PORT} port`);
    })
})
