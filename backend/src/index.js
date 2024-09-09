const config = require('./config/index');
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");



app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello world!"});
})

app.listen(config.PORT, ()=> {
    console.log(`Server running at ${config.PORT} port`);
})