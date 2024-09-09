require('dotenv').config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");


const app = express();
const PORT = process.env.PORT;
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello world!"});
})

app.listen(PORT, ()=> {
    console.log(`Server running at ${PORT} port`);
})