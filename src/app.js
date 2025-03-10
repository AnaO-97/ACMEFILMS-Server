const cors    = require("cors");
const morgan  = require("morgan");
const express = require('express');
const bodyParser = require("body-parser");

const routes = require("./routes/index");

const app    = express();
const client = "http://localhost:5174";

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(morgan('dev'));
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', client);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use("/", routes)


module.exports = app;