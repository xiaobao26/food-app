require('dotenv').config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(8080, () => {
    console.log("Server listening on port 8080");
})