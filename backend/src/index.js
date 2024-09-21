const config = require('./config/index');
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const swaggerUI = require('swagger-ui-express');

const morgan = require('./utils/morgan');
const createLogger = require("./utils/logger");
const logger = createLogger(__filename);
const rateLimit = require("./utils/rateLimit");
const formatResponseMiddleware = require("./middlewares/formatResponse.middlewares");
const unknownErrorMiddlewares = require('./middlewares/error/unknownError.middlewares');
const connectToDB = require('./utils/db');
const v1Router = require('./routes');
const swaggerJSDoc = require('./utils/swagger');
const pathNotFoundMiddleware = require('./middlewares/pathNotFound.middleware');
const validationErrorMiddleware = require('./middlewares/error/validationError.middleware');


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan);
app.use(rateLimit);
app.use(formatResponseMiddleware);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc));

app.use('/v1', v1Router);

// pathNotFoundMiddleware need be at front of any error
app.use(pathNotFoundMiddleware);
app.use(validationErrorMiddleware);
app.use(unknownErrorMiddlewares);


connectToDB().then(() => {
    app.listen(config.PORT, ()=> {
        logger.info(`Server running at ${config.PORT} port`);
    })
})
