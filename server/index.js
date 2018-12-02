
const express = require('express');
const gui = require('./app/controller')
const app = express();
const bodyParser = require('body-parser');

const port = 80;
const server = "localhost";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/../client/"));
app.use("/app", gui);

app.listen(port);

// eslint-disable-next-line no-console
console.log(`listening on: http://${server}:${port}`);