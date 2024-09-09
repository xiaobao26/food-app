const config = require('./config/index');
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

const morgan = require('./utils/morgan');
const createLogger = require("./utils/logger");
const logger = createLogger(__filename);



app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan);

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello world!"});
})

app.listen(config.PORT, ()=> {
    logger.info(`Server running at ${config.PORT} port`);
})