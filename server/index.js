
const express = require('express');
const gui = require('./app/controller')

const app = express();

const port = 4848;
const server = "localhost";

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/../client/"));

app.listen(port);

console.log(`listening on: http://${server}:${port}`);